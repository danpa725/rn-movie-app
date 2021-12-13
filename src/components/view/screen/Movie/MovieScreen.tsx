import React, { useEffect, useState } from "react"

import { MovieData, TrendingMovieData } from "./utils/interface"
import { getMovieList } from "./utils/getMovieData"

import pallete from "@utils/style/pallete"

import Loader from "@components/atoms/Loader/Loader"
import Title from "@components/molecules/Title/Title"

import MovieSlider from "./MovieSlider/MovieSlider"
import MovieTrendingList from "./MovieTrendingList/MovieTrendingList"
import MovieRenderParent from "./MovieRenderParent/MovieRenderParent"

import { TitleContainer } from "./MovieScreen.style"
import { Ionicons } from "@expo/vector-icons"

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
        <MovieRenderParent
            refreshing={refreshing}
            onRefresh={onRefresh}
            upcomingMovieList={upcomingMovieList}
            ListHeaderComponent={
                <>
                    <MovieSlider movieList={movieList} />
                    <MovieTrendingList trendingMovieList={trendingMovieList} />
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
}

export default MovieScreen
