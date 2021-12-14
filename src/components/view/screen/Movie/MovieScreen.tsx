import React, { useState } from "react"

import pallete from "@utils/style/pallete"

import { Ionicons } from "@expo/vector-icons"

import {
    useMovieNowPlaying,
    useMovieTrending,
    useMovieUpcoming,
} from "@api/movie/fetcher/useMovieData"

import Loader from "@components/atoms/Loader/Loader"
import Title from "@components/molecules/Title/Title"

import MovieSlider from "./MovieSlider/MovieSlider"
import MovieTrendingList from "./MovieTrendingList/MovieTrendingList"
import MovieRenderParent from "./MovieRenderParent/MovieRenderParent"

import { TitleContainer } from "./MovieScreen.style"

function MovieScreen() {
    //* data fetching
    const {
        isLoading: isMovieLoading,
        data: movieList,
        error: movieError,
    } = useMovieNowPlaying()
    const {
        isLoading: isUpcomingMovieLoading,
        data: upcomingMovieList,
        error: upcomingMovieError,
    } = useMovieUpcoming()
    const {
        isLoading: isTrendingMovieLoading,
        data: trendingMovieList,
        error: trndingMovieError,
    } = useMovieTrending()

    //* refreshing
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {}

    if (upcomingMovieList && movieList && trendingMovieList)
        return (
            <MovieRenderParent
                refreshing={refreshing}
                onRefresh={onRefresh}
                upcomingMovieList={upcomingMovieList.results}
                ListHeaderComponent={
                    <>
                        <MovieSlider movieList={movieList.results} />
                        <MovieTrendingList
                            trendingMovieList={trendingMovieList.results.slice(
                                0,
                                9
                            )}
                        />
                        <TitleContainer>
                            <Title
                                title="Upcoming"
                                Icon={
                                    <Ionicons
                                        name="alarm"
                                        size={18}
                                        color={pallete.teal7}
                                    />
                                }
                            />
                        </TitleContainer>
                    </>
                }
            />
        )

    return <Loader />
}

export default MovieScreen
