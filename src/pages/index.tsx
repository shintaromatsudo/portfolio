import { Text, Code } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <DarkModeSwitch />
    <Footer>
      <Text color="text">
        <Code>TypeScript</Code> + <Code>React</Code> + <Code>Next.js</Code> + <Code>Chakra UI</Code>{" "}
        + <Code>Bun</Code> + <Code>Proto</Code> + <Code>Biome</Code>
      </Text>
    </Footer>
  </Container>
);

export default Index;
