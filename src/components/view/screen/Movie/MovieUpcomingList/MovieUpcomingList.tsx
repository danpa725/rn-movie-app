import React from "react"
import { StyleSheet } from "react-native"
import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"
import useThemeMode from "@hooks/useThemeMode"

import Image from "@components/atoms/Image/Image"
import TextCustome from "@components/atoms/Text/Text"
import Tag from "@components/molecules/Tag/Tag"

import { MovieData } from "../utils/interface"
import { makeImagePath } from "../utils/getMovieData"

import {
    ParentContainer,
    VerticalScrollContainer,
    CardContainer,
    SideContainer,
    ContentContainer,
    TagContainer,
} from "./MovieUpcomingList.style"
interface MovieUpcomingListProps {
    upcomingMovieList: MovieData[]
}

function MovieUpcomingList({ upcomingMovieList }: MovieUpcomingListProps) {
    const isLight = useThemeMode()

    return (
        <ParentContainer>
            <TextCustome fontSize="16px" fontWeight={700}>
                Upcoming{" "}
                <Ionicons
                    name="alarm"
                    size={16}
                    color={isLight ? pallete.teal10 : pallete.teal6}
                />
            </TextCustome>
            <VerticalScrollContainer>
                {upcomingMovieList.map(
                    ({
                        id,
                        title,
                        vote_average,
                        poster_path,
                        backdrop_path,
                        overview,
                        popularity,
                        release_date,
                    }) =>
                        backdrop_path &&
                        poster_path && (
                            <CardContainer
                                key={id}
                                style={{
                                    elevation: 5,
                                }}
                            >
                                <Image
                                    width="100%"
                                    height="100%"
                                    uri={makeImagePath(backdrop_path)}
                                    customeStyle={{
                                        position: "absolute",
                                    }}
                                    borderRadius="10px"
                                />
                                <BlurView
                                    intensity={isLight ? 70 : 90}
                                    style={[
                                        StyleSheet.absoluteFill,
                                        {
                                            borderRadius: 10,
                                        },
                                    ]}
                                    tint={"dark"}
                                />
                                <Image
                                    width="50%"
                                    height="265px"
                                    uri={makeImagePath(poster_path)}
                                    customeStyle={{
                                        marginLeft: 20,
                                    }}
                                    borderRadius="7.5px"
                                />
                                <SideContainer
                                    style={{
                                        width: 125,
                                        borderTopColor: pallete.gray4,
                                        borderBottomColor: pallete.gray4,
                                        borderTopWidth: 1,
                                        borderBottomWidth: 1,
                                        paddingTop: 5,
                                        paddingBottom: 7.5,
                                    }}
                                >
                                    <TextCustome
                                        fontSize="16px"
                                        fontWeight={700}
                                        fontColor={pallete.gray2}
                                    >
                                        {title}
                                    </TextCustome>
                                    <ContentContainer>
                                        <TagContainer>
                                            <Tag
                                                fontSize="9px"
                                                isLight={isLight}
                                                borderRadius="5px"
                                                customeStyle={{
                                                    marginRight: 10,
                                                }}
                                            >
                                                <Ionicons
                                                    name="calendar"
                                                    size={10}
                                                />
                                                {"  "}
                                                {new Date(
                                                    release_date
                                                ).toLocaleDateString("ko-KR", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </Tag>
                                            <Tag
                                                fontSize="9px"
                                                isLight={isLight}
                                                borderRadius="5px"
                                            >
                                                <Ionicons
                                                    name="arrow-up"
                                                    size={10}
                                                />
                                                {"  "}
                                                {popularity.toFixed(1)}
                                            </Tag>
                                        </TagContainer>

                                        <TextCustome
                                            fontSize="11px"
                                            fontWeight={300}
                                            fontColor={pallete.gray4}
                                        >
                                            {overview && overview.length < 165
                                                ? overview
                                                : `${overview.slice(
                                                      0,
                                                      165
                                                  )}...`}
                                            {overview.length === 0 &&
                                                "There is no overview... sorry 😢"}
                                        </TextCustome>
                                    </ContentContainer>
                                </SideContainer>
                            </CardContainer>
                        )
                )}
            </VerticalScrollContainer>
        </ParentContainer>
    )
}

export default MovieUpcomingList
