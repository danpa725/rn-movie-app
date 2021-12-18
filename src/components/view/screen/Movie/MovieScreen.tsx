import React, { useEffect, useState } from "react"

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
        refetch: refetchMovieNowPlaying,
    } = useMovieNowPlaying()
    const {
        isLoading: isUpcomingMovieLoading,
        data: upcomingMovieList,
        error: upcomingMovieError,
        refetch: refetchMovieUpcoming,
    } = useMovieUpcoming()
    const {
        isLoading: isTrendingMovieLoading,
        data: trendingMovieList,
        error: trndingMovieError,
        refetch: refetchMovieTrending,
    } = useMovieTrending()

    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        if (
            !isMovieLoading &&
            !isTrendingMovieLoading &&
            !isUpcomingMovieLoading
        )
            setIsLoading(false)
    }, [isMovieLoading, isTrendingMovieLoading, isUpcomingMovieLoading])

    const [refreshing, setRefreshing] = useState<boolean>(false)
    const onRefresh = async () => {
        setRefreshing(true)
        await refetchMovieNowPlaying()
        await refetchMovieTrending()
        await refetchMovieUpcoming()
        setRefreshing(false)
    }

    if (!isLoading && upcomingMovieList && movieList && trendingMovieList)
        return (
            <MovieRenderParent
                refreshing={refreshing}
                onRefresh={onRefresh}
                upcomingMovieList={upcomingMovieList.results}
                //* scroll view 속 => 같은 방향 scroll의 Flatlist를 첨가할 수 없음
                //* ListHeaderComponent로 렌더링
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
