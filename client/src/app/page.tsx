"use client";
import {
    GridItem,
    Container,
    Grid,
    Heading,
    Box, Button,
    Flex
} from "@chakra-ui/react";
import { Header } from "@/components";
import {useReadContract, useAccount} from "wagmi";
import {address, abi} from "@/abi/NFTShield.json"
import {useEffect, useState} from "react";
import {NFT} from "@/components/Token/NFT";
import Link from "next/link"
import {PlaceholderCard} from "@/components/Token/Placeholder-Card";
import { useRouter} from "next/navigation"

type Attributes = {
    trait_type: string,
    value: string
}

type Metadata = {
    title: string
    description: string
    design: string
    image: string,
    tokenId: string,
    componentID: string,
    attributes: Attributes[]
}

export default function Home() {

    const [tokens, setTokens] = useState<Metadata[]>([])

    const {address: account, isConnected} = useAccount()

    const {data, isPending} = useReadContract({
        address: address as `0x${string}`,
        abi,
        functionName: "getAllTokens",
        args: [],
        account
    })

    useEffect(() => {
        if(tokens.length === 0 && data) {
            (data as any[])[1].map((hash: string, i: number) =>
                fetch(`https://coral-disturbed-blackbird-606.mypinata.cloud/ipfs/${hash}`)
                    .then((r) => r.json())
                    .then((t) => {
                        if(t?.componentID) {
                            const token = tokens.some((tkn) => tkn?.componentID === t?.componentID)
                            if(!token) {
                               setTokens((tokens: Metadata[]) => ([...tokens, {...t, tokenId: BigInt((data as any[])[0][i]).toString()}]))
                            }
                        }
                    })
            )
        }
    }, [data]);

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

    return (
        <>
            <Header />
            <Container maxW={'container.xl'} flexDirection="column" minHeight="100vh">
                <Box
                    as={'main'}
                    p={"1.5rem"}
                    mt={'2rem'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'2rem'}
                >
                    <Flex
                        w={'full'}
                        justifyContent={'space-between'}
                    >
                        <Heading as={'h2'} size={'lg'} >
                            Your NFTs
                        </Heading>
                        <Flex
                            gap={'1rem'}
                        >
                            <Link href={'/owner'}>
                                <Button
                                    colorScheme={'purple'}
                                    variant={'outline'}
                                >
                                    Owner controls
                                </Button>
                            </Link>
                            <Link href={'/mint'}>
                                <Button
                                    colorScheme={'purple'}
                                >
                                    Mint NFT
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>


                    <Grid
                        templateColumns={{
                            base: '1fr',
                            md: '1fr 1fr',
                            lg: 'repeat(3, 1fr)'
                        }}
                        gap={6}
                    >
                        {
                            isPending && [1,2,3].map((i) => (
                                <GridItem key={i}>
                                    <PlaceholderCard />
                                </GridItem>
                            ))
                        }
                        {
                            !isPending && tokens?.map((token: Metadata) => {
                                return (
                                    <GridItem w='100%'>
                                        <NFT
                                            title={token.title}
                                            description={token.description}
                                            image={token.image}
                                            design={token.design}
                                            componentId={(token.attributes[0]?.value)}
                                            componentDesigner={(token.attributes[1]?.value)}
                                            tokenId={token.tokenId}
                                            key={token.tokenId}
                                        />
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </Box>

            </Container>
        </>
  );
}
