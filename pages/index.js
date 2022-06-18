import {Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
    return(
        <>
        <Container>
            <Box borderRadius="lg" bg="red" p="2.5" mb={6} align="center">
                Hello, I&apos;m a Final year student studying at BIT Mesra, Ranchi
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rahul Raj Soren
                    </Heading>
                    <p>Student ( Gamer / Developer / Designer )</p>
                </Box>
            </Box>
        </Container>
        </>
    )
}

export default Page