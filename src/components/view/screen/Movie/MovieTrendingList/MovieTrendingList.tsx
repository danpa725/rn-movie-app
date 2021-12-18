import React from "react"

import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"
import shadow from "@utils/style/shadow"

import useThemeMode from "@hooks/useThemeMode"

import { makeImagePath } from "@api/utils/makeImagePath"
import { TrendingMovieData } from "@api/movie/interface/interface"

import Text from "@components/atoms/Text/Text"
import Image from "@components/atoms/Image/Image"
import Tag from "@components/molecules/Tag/Tag"
import Title from "@components/molecules/Title/Title"
import FlatList from "@components/structure/FlatList/FlatList"

import {
    ListBox,
    ListBoxDivider,
    ListNumebr,
    ListTitleContainer,
    ListVote,
    TitleContainer,
} from "./MovieTrendingList.style"

interface MovieListProps {
    trendingMovieList: TrendingMovieData[]
}

const ITEM_HEIGHT = 325

const MovieTrendingListRender = ({
    data: item,
    movieNumber,
}: {
    data: TrendingMovieData
    movieNumber: number
}) => {
    const isLight = useThemeMode()

    return (
        <ListBox style={shadow?.sm} isLight={isLight}>
            <ListNumebr isFirst={movieNumber === 1}>{movieNumber}</ListNumebr>
            <ListTitleContainer style={shadow?.sm} isLight={isLight}>
                <Text fontSize="md" fontWeight={700}>
                    {item.title.length <= 27
                        ? item.title
                        : `${item.title.slice(0, 27)}...`}
                </Text>
            </ListTitleContainer>

            {item.poster_path && (
                <Image
                    width="150px"
                    height="220px"
                    uri={makeImagePath(item.poster_path)}
                />
            )}
            <ListVote>
                <Tag isLight={isLight} borderRadius="bxxlg">
                    <Ionicons name="heart" size={10} color="tomato" />{" "}
                    {item.vote_average}
                </Tag>
            </ListVote>
        </ListBox>
    )
}

function MovieTrendingList({ trendingMovieList }: MovieListProps) {
    return (
        <>
            <TitleContainer>
                <Title
                    title="Trending"
                    fontSize="xlg"
                    Icon={
                        <Ionicons name="heart" size={16} color={pallete.red5} />
                    }
                />
            </TitleContainer>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={trendingMovieList}
                RenderElement={({ data, index }) => (
                    <MovieTrendingListRender
                        data={data}
                        movieNumber={index + 1}
                    />
                )}
                ItemSeparatorComponent={ListBoxDivider}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                }}
                itemHeight={ITEM_HEIGHT}
            />
        </>
    )
}

export default MovieTrendingList
