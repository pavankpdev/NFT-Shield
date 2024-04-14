import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button, FormControl, FormLabel, Input, FormHelperText,
    useToast
} from '@chakra-ui/react'
import React, {useState} from "react";
import { isAddress } from 'viem'
import {useAccount, useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {address, abi} from "@/abi/NFTShield.json"
import {useMutation} from "@tanstack/react-query";

export const TransferPrompt: React.FC<{tokenId: string}> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [to, setTo] = useState('')

    const {writeContractAsync} = useWriteContract({})
    const {address: account} = useAccount()

    const toast = useToast()

    const {data: hash, mutate: transferNFT, isPending} = useMutation({
        mutationFn: () => writeContractAsync({
            address: address as `0x${string}`,
            abi,
            functionName: "safeTransferFrom",
            args: [account, to, props.tokenId]
        }),
        mutationKey: ['Transfer NFT'],
        onSuccess: () => {

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
    const {isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({hash})

    if(isConfirmed) {
        toast({
            title: "Transfer Successfull",
            description: "NFT was successfully transferred",
            status: "success",
            isClosable: true
        })
        onClose()
    }

    return (
        <>
            <Button
                onClick={onOpen}
                variant='ghost'
                colorScheme='purple'
            >
                Transfer
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px)'
                />
                <ModalContent>
                    <ModalHeader>Transfer Token #5</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        bg={'gray.50'}
                        py={'2rem'}
                    >
                        <FormControl>
                            <FormLabel>To</FormLabel>
                            <Input type='text' placeholder={'0x94f317....'} value={to} onChange={(e) => setTo(e.target.value)} />
                            <FormHelperText>Enter the wallet address of the recipient.</FormHelperText>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' colorScheme='purple' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            colorScheme='purple'
                            isDisabled={!isAddress(to)}
                            onClick={() => transferNFT()}
                            isLoading={isPending || isConfirming}
                        >
                            Transfer
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}