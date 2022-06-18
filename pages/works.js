import { Container, Box, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
const Works = () =>{
return(
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="hackaduck2" title="Hack-a-Duck 2.0" thumbnail={thumbInkdrop}>
                    A website for the event organised by Psyberduck
                </WorkGridItem>
            </Section>
        </SimpleGrid>
        <Box><Divider></Divider></Box>
    </Container>
)
}

export default Works