import React from "react"
import { ActivityIndicator } from "react-native"

import pallete from "@/utils/style/pallete"

import { LoaderContainer } from "./Loader.style"

interface LoaderOptions {
    color?: string
}

function Loader({ color }: LoaderOptions) {
    return (
        <LoaderContainer>
            <ActivityIndicator color={color ? color : pallete.teal6} />
        </LoaderContainer>
    )
}

export default Loader
