import Button from "@/components/atoms/Button";
import { landing } from "@/content/landing";
import { Screen, Text, Title } from "@/components/templates/StatusScreen/styles";

export default function NotFound() {
  return (
    <Screen>
      <Title>Page not found</Title>
      <Text>That URL is not part of {landing.person.name}’s site.</Text>
      <Button href="/">Back to home</Button>
    </Screen>
  );
}
