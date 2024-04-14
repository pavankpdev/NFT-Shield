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

    const {address: account} = useAccount()

    const {data, isPending} = useReadContract({
        address: address as `0x${string}`,
        abi,
        functionName: "getAllTokens",
        args: [],
        account
    })
    useEffect(() => {
        if(data) {
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

    return (
    <Container maxW={'container.xl'} flexDirection="column" minHeight="100vh">
      <Header />

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
                <Link href={'/mint'}>
                    <Button
                        colorScheme={'purple'}
                    >
                        Mint NFT
                    </Button>
                </Link>
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
                    tokens?.map((token: Metadata) => {
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
  );
}
