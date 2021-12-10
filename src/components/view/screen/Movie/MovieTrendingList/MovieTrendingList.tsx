import React from "react"

import Image from "@components/atoms/Image/Image"
import TextCustome from "@components/atoms/Text/Text"
import useThemeMode from "@/hooks/useThemeMode"

import { makeImagePath } from "../utils/getMovieData"
import { TrendingMovieData } from "../utils/interface"

import {
    ListBox,
    ListContainer,
    ListNumebr,
    ListScrollContainer,
    ListTitleContainer,
    ListVote,
    TitleContainer,
} from "./MovieTrendingList.style"
import { Ionicons } from "@expo/vector-icons"
import Tag from "@/components/molecules/Tag/Tag"

interface MovieListProps {
    trendingMovieList: TrendingMovieData[]
}

function MovieTrendingList({ trendingMovieList }: MovieListProps) {
    const isLight = useThemeMode()
    return (
        <ListContainer>
            <TitleContainer>
                <TextCustome fontSize="16px" fontWeight={700}>
                    Trending <Ionicons name="heart" size={15} color="tomato" />
                </TextCustome>
            </TitleContainer>

            <ListScrollContainer
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {trendingMovieList.map(
                    ({ id, poster_path, vote_average, title }, movieNumber) => (
                        <ListBox
                            key={id}
                            style={{ elevation: 10 }}
                            isLight={isLight}
                        >
                            <ListNumebr>{movieNumber + 1}</ListNumebr>
                            <ListTitleContainer
                                style={{ elevation: 10 }}
                                isLight={isLight}
                            >
                                <TextCustome fontSize="13px">
                                    {title.length <= 27
                                        ? title
                                        : `${title.slice(0, 27)}...`}
                                </TextCustome>
                            </ListTitleContainer>

                            {poster_path && (
                                <Image
                                    width="165px"
                                    height="220px"
                                    uri={makeImagePath(poster_path)}
                                />
                            )}
                            <ListVote>
                                <Tag
                                    isLight={isLight}
                                    borderRadius="15px"
                                    fontSize="10px"
                                >
                                    <Ionicons
                                        name="heart"
                                        size={10}
                                        color="tomato"
                                    />{" "}
                                    {vote_average}
                                </Tag>
                            </ListVote>
                        </ListBox>
                    )
                )}
            </ListScrollContainer>
        </ListContainer>
    )
}

export default MovieTrendingList
