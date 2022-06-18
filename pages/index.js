import {Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
    return(
        <>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')} p="2.5" mb={6} align="center">
                Hello, I&apos;m a Final year student studying at BIT Mesra, Ranchi
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rahul Raj Soren
                    </Heading>
                    <p>Student ( Gamer / Developer / Designer )</p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base:4,md:0}} 
                ml={{md:6}} 
                align="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/roninraj.jpg"
                    // fallbackSrc="https://via.placeholder.com/150x150"
                    alt="Profile Image"/>
                </Box>
            </Box>
        </Container>
        </>
    );
};

export default Page;