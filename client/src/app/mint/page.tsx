'use client'
import {Header} from "@/components";
import {Button, Card, Container, Flex, Heading, Input, Textarea, useToast} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Alert,
    AlertIcon,
} from '@chakra-ui/react'
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {useWriteContract, useAccount, useWaitForTransactionReceipt} from "wagmi"
import {address as contractAddress, abi} from "@/abi/NFTShield.json"

const Mint = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [componentID, setComponentID] = useState('');
    const [componentDesigner, setComponentDesigner] = useState('');
    const [file, setFile] = useState<File | null>(null)

    const toast = useToast()

    const { data: hash, writeContractAsync } = useWriteContract({})

    const uploadData = async (formData: FormData) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    };

    const { address } = useAccount()

    const {mutate: mintNFT, isPending: isMinting} = useMutation({
        mutationFn: (uri: string) => writeContractAsync({
            address: contractAddress as `0x${string}`,
            abi,
            functionName: 'mintNFT',
            args: [
                address,
                uri
            ],
        }),
        mutationKey: ['Mint NFT'],
        onSuccess: () => {
            setTitle("")
            setDescription("")
            setComponentID("")
            setComponentDesigner("")
            setFile(null)
        },
        onError: (err: any) => {
            toast({
                title: "Upload Error",
                description: err?.message || err?.response?.data.messgae || "Something went wrong while minting",
                status: "error",
                isClosable: true
            })
        }
    })

    const {mutate, isPending} = useMutation({
        mutationFn: uploadData,
        mutationKey: ['Mint new NFT'],
        onSuccess: (data) => {
            const uri = data?.hash?.IpfsHash;
            // Make contract call
            mintNFT(uri)
        },
        onError: (err: any) => {
            toast({
                title: "Upload Error",
                description: err?.message || err?.response?.data.messgae || "Something went wrong",
                status: "error",
                isClosable: true
            })
        }
    });

    const {isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({hash})
    const submitHandler = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('componentID', componentID);
        formData.append('componentDesigner', componentDesigner);
        formData.append('file', file as any);

        mutate(formData)
    };

    return (
        <Container maxW={'container.xl'} flexDirection="column" minHeight="100vh">
            <Header />
            <Container maxW={'container.sm'} as="main" flex={1} p={4}>
                <Heading as={'h1'}>
                    Mint an NFT
                </Heading>
                <Card
                    p={'1rem'}
                    display={'flex'}
                    flexDir={'column'}
                    gap={'1rem'}
                    mt={'1rem'}
                >
                    {
                        isConfirmed && (
                            <Alert status='success'>
                                <AlertIcon />
                                Your NFT was minted!
                            </Alert>
                        )
                    }
                    <FormControl>
                        <FormLabel>Upload File</FormLabel>
                        <Input
                            onChange={(e) => e.target?.files && e.target?.files.length > 0 && setFile(e.target.files[0])}
                            type='file'
                            placeholder={"Acme Inc Design"}
                        />
                        <FormHelperText>Choose your CAD design</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type='text'
                            placeholder={"Acme Inc Design"}
                        />
                        <FormHelperText>This will be used to name the NFT</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={6}
                            placeholder={'This Design is about..'}
                        ></Textarea>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Component ID</FormLabel>
                        <Input
                            value={componentID}
                            onChange={(e) => setComponentID(e.target.value)}
                            type='text'
                            placeholder={"123456"}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Component Designer</FormLabel>
                        <Input
                            value={componentDesigner}
                            onChange={(e) => setComponentDesigner(e.target.value)}
                            type='text'
                            placeholder={"Acme Inc."}
                        />
                    </FormControl>
                    <Button
                        colorScheme={'purple'}
                        onClick={submitHandler}
                        isLoading={isPending || isMinting || isConfirming}
                    >
                        Mint NFT
                    </Button>
                </Card>
            </Container>
        </Container>
    );
}

export default Mint;
