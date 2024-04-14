import { type FC, type ChangeEvent, type MouseEvent, useEffect, useState } from "react";

import { Button, Input, VStack } from "@chakra-ui/react";

import { useSignMessageHook, useNotify } from "@/hooks";
import {redirect} from "next/navigation"

const SignMessage: FC = () => {
  const { signature, recoveredAddress, error, isPending, signMessage } = useSignMessageHook();
  const { notifyError, notifySuccess } = useNotify();

  const message = `
    I agree to authenticate my wallet with NFT minter and understand that this action is used solely for the purpose of establishing ownership and does not allow any transactions to be made on my behalf. 
    I am aware that no tokens will be spent, no smart contract interactions will occur, and no personal data will be shared as a result of signing this message. This signature proves ownership and connects my wallet to my user profile securely.
    
    By signing this message, you are only verifying your wallet ownership and agreeing to the terms of use and privacy policy of NFT Minter. Thank you for your cooperation!
  `

  const handleSignMessage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    signMessage({ message: message });
  };

  useEffect(() => {
    if (signature && recoveredAddress) {
      notifySuccess({
        title: "Message successfully signed!",
        message: (
          <>
            <b>Signature:</b> {signature}
            <br />
            <br />
            <b>Recovered Address:</b> {recoveredAddress}
          </>
        ),
      });

      redirect('/')
    }

    if (error) {
      notifyError({
        title: "An error occured:",
        message: error.message,
      });
    }
  }, [signature, recoveredAddress, error, notifyError, notifySuccess]);

  return (
      <Button
          onClick={handleSignMessage}
          isLoading={isPending}
          colorScheme={'purple'}
      >
          Sign Message
      </Button>
  );
};

export default SignMessage;
