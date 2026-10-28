const SHEET_NAME = "Leads";
const TO_EMAIL = "clararibeiro.ugc@gmail.com";
// Must match CONTACT_WEBHOOK_SECRET in Vercel / .env. Do not commit the real value.
const SECRET = "replace-with-CONTACT_WEBHOOK_SECRET";

const HEADERS = [
  "Received at",
  "Name",
  "Email",
  "Company",
  "Product",
  "Package",
  "Message",
  "Status",
  "Error",
];

function doPost(event) {
  let data = {};
  try {
    data = JSON.parse(event.postData.contents);
  } catch (error) {
    return json_({ ok: false, error: "invalid_json" });
  }

  if (!data.secret || data.secret !== SECRET) {
    return json_({ ok: false, error: "unauthorized" });
  }

  const status = data.status || "ok";
  const row = [
    data.receivedAt || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.company || "",
    data.product || "",
    data.packageLabel || "",
    data.message || "",
    status,
    data.error || "",
  ];

  try {
    if (data.notifyEmail !== false && status === "ok") {
      try {
        MailApp.sendEmail({
          to: TO_EMAIL,
          replyTo: data.email,
          name: "Clara UGC site",
          subject: `New brief from ${data.name}`,
          body: [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Company: ${data.company || "—"}`,
            `Product: ${data.product || "—"}`,
            `Package: ${data.packageLabel || "—"}`,
            "",
            data.message || "",
          ].join("\n"),
        });
      } catch (mailError) {
        row[7] = "email_failed";
        row[8] = String(mailError);
      }
    }

    getSheet_().appendRow(row);
    return json_({ ok: true, status: row[7] });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  ensureHeaders_(sheet);
  return sheet;
}

function ensureHeaders_(sheet) {
  const current = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const missing = !current[0] || current[7] !== "Status" || current[8] !== "Error";
  if (missing) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
