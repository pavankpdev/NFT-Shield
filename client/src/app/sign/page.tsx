'use client'

import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react'
import {useAccount} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {SignMessage} from "@/components/MainPane/components";


export default function ForgotPasswordForm() {

    const {isConnected} = useAccount()

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={'white'}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Connect your wallet.
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={'gray.800'}>
                    To continue, please confirm your identity by signing this message. Signing does not trigger a blockchain transaction or incur any gas fees.
                </Text>
                <Stack spacing={6}>
                    {
                        !isConnected && (
                            <ConnectButton />
                        )
                    }
                    {
                        isConnected && (
                            <SignMessage />
                        )
                    }
                </Stack>
            </Stack>
        </Flex>
    )
}