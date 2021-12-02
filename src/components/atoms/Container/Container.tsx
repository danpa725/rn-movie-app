import React, { ReactElement } from "react";
import styled from "styled-components/native";

interface ContainerBoxStyle {
    //* ex: "25px"
    width: string;
    height: string;

    padding: string;
}

const ContainerBox = styled.View``;

interface ContainerProps {
    children: ReactElement;
}

function Container({ children }: ContainerProps) {
    return <ContainerBox>{children}</ContainerBox>;
}

export default Container;
