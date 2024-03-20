import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Orsted Skills Matrix" },
    { name: "description", content: "Skills Matrix home page" },
  ];
};

export default function Index() {
  return <Container>Some charts and analytics</Container>;
}
