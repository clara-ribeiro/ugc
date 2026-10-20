import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1A1A1A",
          color: "#F9F8F6",
          fontSize: 18,
          fontFamily: "Georgia, serif",
        }}
      >
        C
      </div>
    ),
    size,
  );
}
