import { Container, Box, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "../components/section";

const Works = () =>{
return(
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Works
        </Heading>
        <Section>
            <Box></Box>
        <SimpleGrid></SimpleGrid>
        <Divider></Divider>
        </Section>
    </Container>
)
}

export default Works