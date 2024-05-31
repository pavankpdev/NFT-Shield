import {
    Button, Card,
    CardBody, CardFooter,
    Divider, Flex,
    Grid,
    GridItem,
    Heading,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    Link, Box,
    Image,
    useBoolean
} from "@chakra-ui/react";
import React from "react";
import {useAccount, useReadContract} from "wagmi";
import {abi, address} from "@/abi/NFTShield.json"
import {TransferPrompt} from "@/components/Token/TransferPrompt";
import {Visualization} from "@/components/Token/Visualization";

type Metadata = {
    title: string,
    description: string,
    image: string
    design: string,
    componentId: string,
    componentDesigner: string
    tokenId: string
}

export const NFT: React.FC<Metadata> = (props) => {

    const {address: account} = useAccount()

    const {data} = useReadContract({
        address: address as `0x${string}`,
        abi,
        functionName: "ownerOf",
        args: [props.tokenId]
    })

    const fileUrl = `https://coral-disturbed-blackbird-606.mypinata.cloud/ipfs/${props.design}`;

    const downloadFile = () => {
        const fileName = 'CAD_NFT.usdz';

        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        link.setAttribute("target", "_blank")
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const simulator =
        `http://localhost:3001/?filePath=${fileUrl}&name=${props.title}`


    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Box
                        width={'100%'}
                        height={'300px'}
                        rounded={'lg'}
                        position={'relative'}
                        transition={"all .4s linear"}
                        _hover={{
                            "&>.simulationTrigger": {
                                display: "flex",
                                transition: "all .4s linear"
                            }
                        }}
                    >
                        <Image
                            src={process.env.NEXT_PUBLIC_CAD_PLACEHOLDER_IMAGE_HASH}
                            alt={'CAD placeholder'}
                            borderRadius='lg'
                            width={'100%'}
                            height={'100%'}
                        />
                        <Flex
                            width={'100%'}
                            height={'100%'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bg={"rgba(0,0,0,0.5)"}
                            position={"absolute"}
                            inset={0}
                            rounded={'lg'}
                            className={"simulationTrigger"}
                            display={"none"}
                            transition={"all .4s linear"}
                        >
                            <Visualization
                                src={props.design}
                                name={props.title}
                            />
                        </Flex>

                    </Box>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' noOfLines={2}>{props.title}</Heading>
                        <Text noOfLines={3}>
                            {props.description}
                        </Text>
                        <Grid
                            templateColumns={{
                                base: '1fr 1fr',
                            }}
                        >
                            <GridItem>
                                <Stat>
                                    <StatLabel color={'purple.600'}>Component ID</StatLabel>
                                    <StatNumber>{props.componentId}</StatNumber>
                                </Stat>
                            </GridItem>
                            <GridItem>
                                <Stat>
                                    <StatLabel color={'purple.600'}>Component Designer</StatLabel>
                                    <StatNumber>{props.componentDesigner}</StatNumber>
                                </Stat>
                            </GridItem>
                        </Grid>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Flex
                        w={'full'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        {
                            ((account as string).toLowerCase() === (data as string)?.toLowerCase()) && (
                                <Button
                                    variant='solid'
                                    colorScheme='purple'
                                    onClick={downloadFile}
                                >
                                    Download
                                </Button>
                            )
                        }
                        <Flex>
                            <Link href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER}/nft/${process.env.NEXT_PUBLIC_COLLECTION_ADDRESS}/${props.tokenId}`} isExternal>
                                <Button
                                    variant='ghost'
                                    colorScheme='purple'
                                >
                                    Track
                                </Button>
                            </Link>
                            {
                                ((account as string).toLowerCase() === (data as string)?.toLowerCase()) && (
                                    <TransferPrompt tokenId={props.tokenId} />
                                )
                            }
                        </Flex>
                    </Flex>
                </CardFooter>
            </Card>
        </>
    )
}