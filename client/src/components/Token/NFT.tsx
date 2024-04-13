import {
    Button, Card,
    CardBody, CardFooter,
    Divider,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    Text
} from "@chakra-ui/react";
import React from "react";

type Metadata = {
    title: string,
    description: string,
    image: string
    design: string,
    componentId: string,
    componentDesigner: string
}

export const NFT: React.FC<Metadata> = (props) => {

    const downloadFile = () => {
        const fileUrl = `https://coral-disturbed-blackbird-606.mypinata.cloud/ipfs/${props.design}`;
        const fileName = 'CAD_NFT.pdf';

        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        link.setAttribute("target", "_blank")
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={process.env.NEXT_PUBLIC_CAD_PLACEHOLDER_IMAGE_HASH}
                        alt={'CAD placeholder'}
                        borderRadius='lg'
                    />
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
                    <Button
                        variant='solid'
                        colorScheme='purple'
                        onClick={downloadFile}
                    >
                        Download
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}