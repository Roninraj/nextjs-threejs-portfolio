import { Container, Box, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "../components/section";
import Link from "next/link";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbHackaduck from '../public/images/works/hackaduck2.png'
//import valoMontage from '../public/images/works/valo_montage.png'

const Works = () =>{
return(
    <Layout>
            <Container>
            <Box>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading> 

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.5}>
                        <WorkGridItem id="hackaduck2" title="Hack-a-Duck 2.0" thumbnail={thumbHackaduck}>
                            A website for the event organised by <Link href="https://psyberduck.com/">Psyberduck</Link>
                        </WorkGridItem>
                    </Section>
                    {/* <Section delay={0.3}>
                        <WorkGridItem id="samurai_montage" title="Valo Montage" thubnail={thumbHackaduck}>
                                A montage made from game - Valorant
                        </WorkGridItem>
                    </Section> */}
                </SimpleGrid>
            </Box>

            <Divider/>

            <Box pt={4}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Collaborations
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.5}>
                        <WorkGridItem id="hackaduck2" title="Hack-a-Duck 2.0" thumbnail={thumbHackaduck}>
                            A website for the event organised by <Link href="https://psyberduck.com/">Psyberduck</Link>
                        </WorkGridItem>
                    </Section>
                    {/* <Section delay={0.3}>
                        <WorkGridItem id="samurai_montage" title="Valo Montage" thubnail={thumbHackaduck}>
                                A montage made from game - Valorant
                        </WorkGridItem>
                    </Section> */}
                </SimpleGrid>

            </Box> 
        </Container>
    </Layout>
)
}

export default Works