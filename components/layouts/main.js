import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container} from '@chakra-ui/react'
import VoxelFox from '../voxel-fox'
import NoSsr from '../no-ssr'
const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <title>roninraj</title>
                </Head>
                <Navbar path={router.asPath}/>  

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelFox/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    ) 
}

export default Main