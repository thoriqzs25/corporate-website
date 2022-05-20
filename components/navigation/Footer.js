import { Flex, Square } from "@chakra-ui/react";

export default function Footer() {
    return(
        <Flex
            as="footer"
            p="1.5rem"
            color="gray.500"
        >
            <Square>2022</Square>
            <Square>PT.EXAMPLE</Square>
        </Flex>
    )
}