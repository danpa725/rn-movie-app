import React from "react";
import { Dimensions, View } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import pallete from "@/utils/style/pallete";

const Container = styled.ScrollView`
    flex: 1;
    background: ${(props) => props.theme.background};
`;

const MovieCard = styled.View`
    flex: 1;
    background: ${pallete.blue3};
`;
function MovieScreen() {
    const { height } = Dimensions.get("window");

    return (
        <Container>
            <Swiper
                containerStyle={{
                    width: "100%",
                    height: height / 4,
                }}
                loop={true}
                timeout={3.25}
                controlsEnabled={false}
            >
                <MovieCard></MovieCard>
                <MovieCard></MovieCard>
                <MovieCard></MovieCard>
                <MovieCard></MovieCard>
            </Swiper>
        </Container>
    );
}

export default MovieScreen;
