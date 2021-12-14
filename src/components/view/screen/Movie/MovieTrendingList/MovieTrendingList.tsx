import React, { useCallback } from "react"

import Image from "@components/atoms/Image/Image"
import TextCustome from "@components/atoms/Text/Text"
import Tag from "@components/molecules/Tag/Tag"
import Title from "@components/molecules/Title/Title"

import pallete from "@utils/style/pallete"

import useThemeMode from "@hooks/useThemeMode"

import { makeImagePath } from "../../../../../api/movie/fetcher/fetchMovieData"
import { TrendingMovieData } from "../../../../../api/movie/interface/interface"

import {
    ListBox,
    ListBoxDivider,
    ListContainer,
    ListNumebr,
    ListScrollContainer,
    ListTitleContainer,
    ListVote,
    TitleContainer,
} from "./MovieTrendingList.style"
import { Ionicons } from "@expo/vector-icons"
import useItemLayout from "@/hooks/useItemLayout"
import shadow from "@/utils/style/shadow"

interface MovieListProps {
    trendingMovieList: TrendingMovieData[]
}

const ITEM_HEIGHT = 325

function MovieTrendingList({ trendingMovieList }: MovieListProps) {
    const isLight = useThemeMode()

    const getItemLayout = useItemLayout(ITEM_HEIGHT)

    const renderItem = useCallback(
        ({ item, index: movieNumber }) => (
            <ListBox style={shadow?.sm} isLight={isLight}>
                <ListNumebr>{movieNumber + 1}</ListNumebr>
                <ListTitleContainer style={shadow?.sm} isLight={isLight}>
                    <TextCustome fontSize="13px" fontWeight={700}>
                        {item.title.length <= 27
                            ? item.title
                            : `${item.title.slice(0, 27)}...`}
                    </TextCustome>
                </ListTitleContainer>

                {item.poster_path && (
                    <Image
                        width="165px"
                        height="220px"
                        uri={makeImagePath(item.poster_path)}
                    />
                )}
                <ListVote>
                    <Tag isLight={isLight} borderRadius="15px" fontSize="10px">
                        <Ionicons name="heart" size={10} color="tomato" />{" "}
                        {item.vote_average}
                    </Tag>
                </ListVote>
            </ListBox>
        ),
        []
    )

    return (
        <ListContainer>
            <TitleContainer>
                <Title
                    title="Trending"
                    Icon={
                        <Ionicons name="heart" size={16} color={pallete.red5} />
                    }
                />
            </TitleContainer>

            <ListScrollContainer
                horizontal
                showsHorizontalScrollIndicator={false}
                data={trendingMovieList}
                renderItem={renderItem}
                getItemLayout={getItemLayout}
                ItemSeparatorComponent={ListBoxDivider}
                //@ts-ignore
                keyExtractor={(item) => String(item.id)}
                removeClippedSubviews={false}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                }}
                disableVirtualization={false}
            />
        </ListContainer>
    )
}

export default MovieTrendingList
