import {CardBody, Card, Skeleton, SkeletonText} from "@chakra-ui/react";

export const PlaceholderCard = () => {
    return (
        <Card
            w={'full'}
        >
            <CardBody>
                <Skeleton
                    w={'full'}
                    h={'350px'}
                    rounded={'lg'}
                />
                <Skeleton height='20px' w={'50%'} mt={'1rem'} />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </CardBody>

        </Card>
    )
}