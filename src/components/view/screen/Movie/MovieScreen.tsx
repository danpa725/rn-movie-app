import React, { useEffect, useState } from "react"
import { RefreshControl } from "react-native"

import { MovieData, TrendingMovieData } from "./utils/interface"
import { getMovieList } from "./utils/getMovieData"

import Loader from "@components/atoms/Loader/Loader"

import MovieSlider from "./MovieSlider/MovieSlider"
import MovieTrendingList from "./MovieTrendingList/MovieTrendingList"
import MovieUpcomingList from "./MovieUpcomingList/MovieUpcomingList"

import { MovieScreenContainer } from "./MovieScreen.style"

function MovieScreen() {
    //* loading state
    const [loading, setLoading] = useState(true)

    //* data state
    const [movieList, setMovieList] = useState<MovieData[]>([])
    const [upcomingMovieList, setUpcomingMovieList] = useState<MovieData[]>([])
    const [trendingMovieList, setTrendingMovieList] = useState<
        TrendingMovieData[]
    >([])

    //* fetching data
    const fetchData = async () => {
        const [movieList, upcomingMovieList, trendingMovieList] =
            await Promise.all([
                getMovieList("now_playing"),
                getMovieList("upcoming"),
                getMovieList("trending"),
            ])
        setMovieList(movieList)
        setUpcomingMovieList(upcomingMovieList)
        setTrendingMovieList(trendingMovieList.slice(0, 9))
    }

    useEffect(() => {
        fetchData()
        setLoading(false)
    }, [])

    //* refreshing
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = async () => {
        setRefreshing(true)
        await fetchData()
        setRefreshing(false)
    }

    if (loading) return <Loader />

    return (
        <MovieScreenContainer
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <MovieSlider movieList={movieList} />
            <MovieTrendingList trendingMovieList={trendingMovieList} />
            <MovieUpcomingList upcomingMovieList={upcomingMovieList} />
        </MovieScreenContainer>
    )
}

export default MovieScreen
