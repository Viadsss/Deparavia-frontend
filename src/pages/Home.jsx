import { Box } from "@chakra-ui/react";
import Hero from "../components/home/Hero";
import Team from "../components/home/Team";

export default function Home() {
  return (
    <Box px="32px">
      <Hero />
      <Team />
    </Box>
  );
}
