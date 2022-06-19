import { useState, useEffect, useRef, useCallback } from "react"
import { Box, Spinner } from "@chakra-ui/react"
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {loadGLTFModel} from '../lib/model'

function easeOutCirc(x) {
    return Math.sqrt(1-Math.pow(x-1,4))
}

// const VoxelFox = () => {
//     const refContainer = useRef()
//     const [loading, setLoading] = useState(true)
//     const [renderer, setRenderer] = useState()
//     const [_camera, setCamera] = useState()
//     const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
//     const [initialCameraPosition] = useState(
//         new THREE.Vector3(
//             20 * Math.sin(0.2*Math.PI),
//             10,
//             20*Math.cos(0.2*Math.PI)
//         )
//     )

    

    return (
        <Box ref={refContainer}>
            Fox!!!
        </Box>
    )


export default VoxelFox