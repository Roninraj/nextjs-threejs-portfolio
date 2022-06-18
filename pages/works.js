import { Container, Box, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "../components/section";
import Link from "next/link";
import { WorkGridItem } from "../components/grid-item";
import thumbHackaduck from '../public/images/works/hackaduck2.png'
//import valoMontage from '../public/images/works/valo_montage.png'

const Works = () =>{
return(
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Works
        </Heading> 

        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="hackaduck2" title="Hack-a-Duck 2.0" thumbnail={thumbHackaduck}>
                    A website for the event organised by <Link href="https://psyberduck.com/">Psyberduck</Link>
                </WorkGridItem>
            </Section>
            <Divider></Divider>
            <Section>
                <WorkGridItem id="samurai_montage" title="Valo Montage" thubnail={thumbHackaduck}>
                        A montage made from game - Valorant
                </WorkGridItem>
            </Section>
            <Box></Box>
           </SimpleGrid> 
        
    </Container>
)
}

export default Works