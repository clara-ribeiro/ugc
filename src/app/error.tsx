"use client";

import Button from "@/components/atoms/Button";
import { Screen, Text, Title } from "@/components/templates/StatusScreen/styles";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Screen>
      <Title>Something went wrong</Title>
      <Text>Reload this page. If it keeps happening, copy the email on the home page.</Text>
      <Button onClick={() => reset()}>Try again</Button>
    </Screen>
  );
}
