'use client'

import {
    Select, Container,
    Flex, FormControl, FormLabel,
    Heading, Input,
    Stack,
    Text, Button,
    useToast
} from '@chakra-ui/react'
import {useAccount, useWriteContract} from "wagmi";
import {Header} from "@/components";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {address, abi} from "@/abi/NFTShield.json"
import {isAddress} from "viem";


export default function ForgotPasswordForm() {
    const [userW, setUserW] = useState('')
    const [userB, setUserB] = useState('')

    const {isConnected} = useAccount()
    const toast = useToast()
    const router = useRouter()

    useEffect(() => {
        const walletConnectionCheck  = setTimeout(() => {
            if(!isConnected) {
                console.log(isConnected)
                router.push('/sign')
            }
        },1000)

        return () => clearTimeout(walletConnectionCheck)
    }, [isConnected]);



    const { writeContractAsync} = useWriteContract({})

    const {mutate: addToWhitelist, isPending: isAddingToWhitelist} = useMutation({
        mutationFn: () => writeContractAsync({
            address: address as `0x${string}`,
            abi,
            functionName: "addToWhitelist",
            args: [userW]
        }),
        mutationKey: ['Add to Whitelist'],
        onSuccess: () => {
            toast({
                title: "Whitelisted",
                status: 'success'
            })
        },
        onError: (err: any) => {
            toast({
                title: "Error",
                status: 'error',
                description: err?.message || err?.response?.data.messgae || "Something went wrong",
            })
        }
    })
    const {mutate: removeFromWhitelist, isPending: isRemovingFromWhitelist} = useMutation({
        mutationFn: () => writeContractAsync({
            address: address as `0x${string}`,
            abi,
            functionName: "removeFromWhitelist",
            args: [userW]
        }),
        mutationKey: ['Remove from Whitelist'],
        onSuccess: () => {
            toast({
                title: "Removed from whitelist",
                status: 'success'
            })
        },
        onError: (err: any) => {
            toast({
                title: "Error",
                status: 'error',
                description: err?.message || err?.response?.data.messgae || "Something went wrong",
            })
        }
    })
    const {mutate: addToBlacklist, isPending: isAddingToBlacklist} = useMutation({
        mutationFn: () => writeContractAsync({
            address: address as `0x${string}`,
            abi,
            functionName: "addToBlacklist",
            args: [userB]
        }),
        mutationKey: ['Add to Blacklist'],
        onSuccess: () => {
            toast({
                title: "Blacklisted",
                status: 'success'
            })
        },
        onError: (err: any) => {
            toast({
                title: "Error",
                status: 'error',
                description: err?.message || err?.response?.data.messgae || "Something went wrong",
            })
        }
    })
    const {mutate: removeFromBlacklist, isPending: isRemovingFromBlacklist} = useMutation({
        mutationFn: () => writeContractAsync({
            address: address as `0x${string}`,
            abi,
            functionName: "removeFromBlacklist",
            args: [userB]
        }),
        mutationKey: ['Removed from blacklisted'],
        onSuccess: () => {
            toast({
                title: "Removed form Blacklisted",
                status: 'success'
            })
        },
        onError: (err: any) => {
            toast({
                title: "Error",
                status: 'error',
                description: err?.message || err?.response?.data.messgae || "Something went wrong",
            })
        }
    })

    return (
        <Container
            minH={'100vh'}
            maxW={'container.xl'}
        >
            <Header />
            <Flex
                alignItems={'center'}
                w={'100%'}
                h={'100%'}
                justifyContent={'center'}
                gap={'2rem'}
            >
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={'white'}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} color={'green.500'}>
                        Whitelist Wallet
                    </Heading>
                    <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={'gray.800'}>
                        Whitelisting provides read-only access to the wallet, they&apos;ll be able to view the NFT details.
                    </Text>
                    <Stack spacing={6}>
                        <FormControl id="wallet">
                            <FormLabel>Wallet address</FormLabel>
                            <Input
                                placeholder="0x945T..."
                                _placeholder={{ color: 'gray.500' }}
                                type="wallet"
                                value={userW}
                                onChange={(e) => setUserW(e.target.value)}
                            />
                        </FormControl>
                        <Flex
                            gap={'1rem'}
                        >
                            <Button
                                onClick={() => addToWhitelist()}
                                isDisabled={!isAddress(userW)}
                                isLoading={isAddingToWhitelist}
                            >
                                Add
                            </Button>
                            <Button
                                onClick={() => removeFromWhitelist()}
                                isDisabled={!isAddress(userW)}
                                isLoading={isRemovingFromWhitelist}
                            >
                                Remove
                            </Button>
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={'white'}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} color={'red.500'}>
                        Blacklist Wallet
                    </Heading>
                    <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={'gray.800'}>
                        Blacklisting would ban the wallet from performing any access controller actions.
                    </Text>
                    <Stack spacing={6}>
                        <FormControl id="wallet">
                            <FormLabel>Wallet address</FormLabel>
                            <Input
                                placeholder="0x945T..."
                                _placeholder={{ color: 'gray.500' }}
                                type="wallet"
                                value={userB}
                                onChange={(e) => setUserB(e.target.value)}
                            />
                        </FormControl>
                        <Flex
                            gap={'1rem'}
                        >
                            <Button
                                onClick={() => addToBlacklist()}
                                isDisabled={!isAddress(userB)}
                                isLoading={isAddingToBlacklist}
                            >
                                Add
                            </Button>
                            <Button
                                onClick={() => removeFromBlacklist()}
                                isDisabled={!isAddress(userB)}
                                isLoading={isRemovingFromBlacklist}
                            >
                                Remove
                            </Button>
                        </Flex>
                    </Stack>
                </Stack>
            </Flex>

        </Container>
    )
}