import React, { useEffect, useState } from "react"
import { RefreshControl } from "react-native"
import { useQueryClient } from "react-query"

import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"

import useLoadingState from "@/hooks/useLoadingState"

import {
    useTvAiringToday,
    useTvTopRated,
    useTvTrending,
} from "@api/tv/fetcher/useTvData"
import { TV_CATEGORY } from "@api/tv/queryKey/tvKey"

import Loader from "@components/atoms/Loader/Loader"

import TvHorizontalList from "./TvHorizontalList/TvHorizontalList"

import { ScrollContainer } from "./TvScreen.style"
import useRefetch from "@/hooks/useRefetch"

function TvScreen() {
    const { data: trendingData, isLoading: isTrendingLoading } = useTvTrending()
    const { data: topRatedData, isLoading: isTopRatedLoading } = useTvTopRated()
    const { data: airingTodayData, isLoading: isAiringTodayLoading } =
        useTvAiringToday()

    const isLoading = useLoadingState([
        isTrendingLoading,
        isTopRatedLoading,
        isAiringTodayLoading,
    ])

    const [isRefreshing, onRefresh] = useRefetch(TV_CATEGORY)

    if (!isLoading && trendingData && topRatedData && airingTodayData)
        return (
            <ScrollContainer
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <TvHorizontalList
                    tvData={trendingData.results}
                    Icon={
                        <Ionicons name="heart" color={pallete.red5} size={15} />
                    }
                    title="Trending"
                />
                <TvHorizontalList
                    tvData={topRatedData.results}
                    Icon={
                        <Ionicons
                            name="star"
                            color={pallete.yellow6}
                            size={15}
                        />
                    }
                    title="Top Rated"
                />
                <TvHorizontalList
                    tvData={airingTodayData.results}
                    Icon={
                        <Ionicons
                            name="airplane"
                            color={pallete.teal8}
                            size={15}
                        />
                    }
                    title="On Air"
                />
            </ScrollContainer>
        )
    return <Loader />
}

export default TvScreen
