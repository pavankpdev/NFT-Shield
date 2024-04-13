"use client";
import { type FC } from "react";

import {HStack, Heading, Button} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import logo from "../../../public/img/logo_transparent.png";

const Header: FC = () => {
  return (
    <HStack
      as="header"
      p={"1.5rem"}
      position="sticky"
      top={0}
      zIndex={10}
      justifyContent={"space-between"}
    >
      <HStack>
        <Image src={logo.src} alt="logo" width={45} height={45} />
      </HStack>

      <HStack>
        <ConnectButton />
      </HStack>
    </HStack>
  );
};

export default Header;
