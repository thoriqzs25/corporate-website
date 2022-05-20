import { useState } from "react";
import { Input, Flex, Square, Box, Stack, StylesProvider } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";

const LINKS = [
    {
        name: "About Us",
        path: "/about-us",
        mode: 0,
    },
    {
        name: "Focused Segment",
        path: "/",
        mode: 0,
    },
    {
        name: "Contact",
        path: "/contact",
        mode: 0,
    },
];

const Sidebar = ({menuOpen, setMenu}) => {
    return (
        <Stack
            visibility={menuOpen ? "visible" : "hidden"}
            cursor="pointer"
            bg="#262533"
            opacity="0.9"
            right={menuOpen ? "0" : "-20rem"}
            top="0"
            w={menuOpen ? "full" : "0"}
            h="100vh"
            p="3rem"
            position="fixed"
            transitionDuration="800ms"
            transitionTimingFunction='ease-out'
        >
            <Box mb="2rem">
                <BsArrowLeft onClick={setMenu}  size={28} color="white" />
            </Box>
           {LINKS.map((link) => {
                return(
                    <Box
                        className='hoverable horizontal'                        
                        color="white" 
                        fontSize="1.2rem" 
                        fontWeight="semibold"
                        key={link.name + '-nav'}
                        px="1rem"
                        py="0.2rem"
                        mb="0.2rem"
                        // bg="green"
                    >
                        {link.name}
                    </Box>
                )
            })} 
        </Stack>
    )
}

export default function Header({...props}) {
    
    const [menuOpen, setMenuOpen] = useState(false);

    function setMenu() {
        setMenuOpen(!menuOpen);
    }

    return(
        <Flex
            as="nav"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            py="2em"
            paddingLeft={["2em", "4em", "4em"]}
            paddingRight={["2em", "4em", "4em"]}
        >
            <Input 
                visibility={menuOpen ? "hidden" : "visible"}
                variant="unstyled" 
                fontSize="1.3rem"
                w="12rem"
                rounded="0"
                bg="#C4C4C4"
                p="0.2em"
            />
            <Box
                display={{ph: "block", ds: "none"}}
                onClick={setMenu} 
            >
                {!menuOpen && <GiHamburgerMenu size={28} color="white" />}
            </Box>
            <Sidebar menuOpen={menuOpen} setMenu={setMenu} />
            <Box
                display={{ph: 'none', ds: 'block'}}
            >
                <Stack spacing={10} direction="row" cursor="pointer">
                    {LINKS.map((link) => {
                        return(
                            <Box                                
                                className="hoverable vertical"
                                mr="1rem"
                                color="white" 
                                fontSize="1.2rem" 
                                fontWeight="semibold"
                                key={link.name + '-nav'}
                            >
                                {link.name}
                            </Box>
                        )
                    })}
                </Stack>
            </Box>
        </Flex>
    )
}