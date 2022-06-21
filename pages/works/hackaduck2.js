import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Heading, Center } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage } from "../../components/work"
import Paragraph from "../../components/paragraph"

const Work = () =>(
<Layout title="Hack-a-Duck 2.0">
    <Container>
        <Title>
            Hack-a-Duck 2.0 <Badge>June, 2022</Badge>
        </Title>
    </Container>
</Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'