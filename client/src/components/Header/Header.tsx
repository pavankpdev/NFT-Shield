"use client";
import { type FC } from "react";

import {HStack, Box, Button, Container} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import logo from "../../../public/img/logo_transparent.png";
import Link from "next/link";

const Header: FC = () => {
  return (
    <Box
      backgroundColor={'white'}
    >
      <Container
        maxW={'container.xl'}
      >
        <HStack
            as="header"
            p={"1.5rem 0"}
            position="sticky"
            top={0}
            zIndex={10}
            justifyContent={"space-between"}
        >
          <HStack>
            <Link href={'/'}>
              <Image src={logo.src} alt="logo" width={45} height={45} />
            </Link>
          </HStack>

          <HStack>
            <ConnectButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
