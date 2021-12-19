import React from "react"

import pallete from "@utils/style/pallete"

import { Ionicons } from "@expo/vector-icons"

import {
    useMovieNowPlaying,
    useMovieTrending,
    useMovieUpcoming,
} from "@api/movie/fetcher/useMovieData"
import { MOVIE_CATEGORY } from "@api/movie/queryKey/movieKey"

import useLoadingState from "@hooks/useLoadingState"
import useRefetch from "@hooks/useRefetch"

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

    const isLoading = useLoadingState([
        isMovieLoading,
        isTrendingMovieLoading,
        isUpcomingMovieLoading,
    ])
    const [isRefreshing, onRefresh] = useRefetch(MOVIE_CATEGORY)

    if (!isLoading && upcomingMovieList && movieList && trendingMovieList)
        return (
            <MovieRenderParent
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                upcomingMovieList={upcomingMovieList.results}
                ListHeaderComponent={
                    //* scroll view 속 => 같은 방향 scroll의 Flatlist를 첨가할 수 없음
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
                                fontSize="xlg"
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
