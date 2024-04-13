"use client";
import {Box, Container} from "@chakra-ui/react";

import { Header, MainPane } from "@/components";

export default function Home() {
  return (
    <Container maxW={'container.xl'} flexDirection="column" minHeight="100vh">
      <Header />

      <Box as="main" flex={1} p={4}>
        <MainPane />
      </Box>

    </Container>
  );
}
