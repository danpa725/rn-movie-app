import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View, Text } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import pallete from "@utils/style/pallete";

const Container = styled.ScrollView`
    flex: 1;
    background: ${(props) => props.theme.background};
`;

const MovieCard = styled.View`
    flex: 1;
    background: ${pallete.blue3};
`;

const MovieCardBackground = styled.Image`
    flex: 1;
`;

const LoaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.background};
`;

const API_KEY = "6b62dc478a01071b4521cf9b55154456";
const MOVIE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`;

const makeImagePath = (imageURL: string, width: string = "w500") => {
    const baseURL = "https://image.tmdb.org/t/p/";
    return `${baseURL}${width}${imageURL}`;
};

function MovieScreen() {
    const { height } = Dimensions.get("window");

    const getMovieList = async () => {
        const response = await fetch(MOVIE_URL);
        const { results: movieList } = await response.json();
        setMovieList(movieList);
        setLoading(false);
    };

    useEffect(() => {
        getMovieList();
    }, []);

    const [loading, setLoading] = useState(true);

    const [movieList, setMovieList] = useState<any[]>([]);

    if (loading)
        return (
            <LoaderContainer>
                <ActivityIndicator color={pallete.blue4} />
            </LoaderContainer>
        );

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
                {movieList.map((movie) => (
                    <MovieCard key={movie.id}>
                        <MovieCardBackground
                            source={{ uri: makeImagePath(movie.backdrop_path) }}
                        />
                    </MovieCard>
                ))}
            </Swiper>
        </Container>
    );
}

export default MovieScreen;
