import {Box, Button, Container, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react"
//import Head from "next/head";
import NextLink from 'next/link'
import Section from "../components/section";
import Paragraph from "../components/paragraph"
import Codebox from "../components/codebox";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";


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
                    borderWidth={3} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/roninraj.jpg"
                    // fallbackSrc="https://via.placeholder.com/150x150"
                    alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>I am a final-year student currently completing my B.Tech in Computer Science and Engineering.
                    Got a knack of using new technologies and try out their effectiveness in solving real-life problems. 
                    Gaming&apos;s got a second blood in me, especially when it&apos;s FPS. The recent work I did on was on Front-end for {''}
                    <NextLink href="/works/hackaduck2"><Link>Hack-a-Duck 2.0</Link></NextLink>.
                    <br/>
                    <Codebox><code>" Never ever lose yourself "</code></Codebox>
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal" variant="outline">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Tarkeshwar ( তারকেশ্বর ), India.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    High School from St. Anthony's, Ranchi 
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Secondary High School from St. Xaviers, Bokaro 
                </BioSection>
                <BioSection>
                    <BioYear>2019 - present</BioYear>
                    Studying B.Tech in CSE at Birla Institute of Technology, Mesra
                </BioSection>
            </Section>
        </Container>
        </>
    );
};

export default Page;