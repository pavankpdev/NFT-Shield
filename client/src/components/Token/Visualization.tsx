import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import {ViewIcon} from "@chakra-ui/icons";
import React from "react";

type Props = {
    name: string
    src: string
}

export function Visualization(props: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const fileUrl = `https://coral-disturbed-blackbird-606.mypinata.cloud/ipfs/${props.src}`;
    const simulator =
        `http://localhost:3001/?filePath=${fileUrl}&name=${props.name}`
    console.log(simulator)
    return (
        <>
            <Button
                onClick={onOpen}
                w={"fit-content"}
                rightIcon={<ViewIcon />}
            >
                Open Modal
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={"full"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Visualizing {props.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <iframe
                            src={simulator}
                            title={props.name}
                            style={{
                                width: "100%",
                                height: "100vh"
                            }}
                        ></iframe>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}