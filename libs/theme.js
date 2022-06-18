import { extendTheme, Thead } from "@chakra-ui/react";
import chakraUiTheme from "@chakra-ui/theme";
import {mode} from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
            body: {
                bg: mode('#f0e7dc','#202024')(props)
            }
    })
}

const components = {
    Heading: {
        variants:{
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    headinf:"'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode:true
}

const theme = extendTheme({
    config, styles, components,
    colors, fonts
})

export default theme