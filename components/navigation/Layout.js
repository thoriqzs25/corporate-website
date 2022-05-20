import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    return(
        <Flex
            direction="column"
            m="0 auto"
            overflowX="hidden"
            {...props}
        >
            <Header />
            {props.children}
            <Footer />
        </Flex>
    )
}