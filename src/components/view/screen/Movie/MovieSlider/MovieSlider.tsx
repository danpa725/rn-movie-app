import React from "react"
import { Dimensions, StyleSheet, Text } from "react-native"

import useThemeMode from "@/hooks/useThemeMode"

import Swiper from "react-native-swiper"
import { BlurView } from "expo-blur"

import { makeImagePath } from "../utils/getMovieData"
import { MovieData } from "../utils/interface"

import {
    MovieCard,
    MovieDescriptionWrapper,
    MovieWrapper,
} from "./MovieSlider.style"

import Image from "@/components/atoms/Image/Image"
import borderRadius from "@/utils/style/borderRadius"
import Tag from "@/components/molecules/Tag/Tag"
import { Ionicons } from "@expo/vector-icons"
import pallete from "@/utils/style/pallete"
import TextCustome from "@/components/atoms/Text/Text"
import fontSize from "@/utils/style/font"

interface MovieSliderProps {
    movieList: MovieData[]
}

function MovieSlider({ movieList }: MovieSliderProps) {
    const isLight = useThemeMode()
    const { height } = Dimensions.get("window")

    return (
        <Swiper
            horizontal={true}
            containerStyle={{
                width: "100%",
                height: height / 4,
            }}
            loop={true}
            autoplay={true}
            autoplayTimeout={3.5}
            showsButtons={false}
            showsPagination={false}
        >
            {movieList.length !== 0 &&
                movieList.map(
                    ({
                        id,
                        backdrop_path,
                        poster_path,
                        original_title,
                        overview,
                        vote_average,
                    }) => (
                        <MovieCard key={id}>
                            {backdrop_path && (
                                <Image
                                    width="100%"
                                    height="100%"
                                    uri={makeImagePath(backdrop_path)}
                                />
                            )}

                            {!backdrop_path && poster_path && (
                                <Image
                                    width="100%"
                                    height="100%"
                                    uri={makeImagePath(poster_path)}
                                />
                            )}

                            <BlurView
                                intensity={isLight ? 70 : 90}
                                style={StyleSheet.absoluteFill}
                                tint={"dark"}
                            >
                                <MovieWrapper>
                                    {poster_path && (
                                        <Image
                                            width="110px"
                                            height="170px"
                                            borderRadius={borderRadius.bxlg}
                                            uri={makeImagePath(poster_path)}
                                        />
                                    )}

                                    <MovieDescriptionWrapper>
                                        <TextCustome
                                            fontSize={fontSize.xxlg}
                                            fontColor={pallete.gray2}
                                            fontWeight={700}
                                            customeStyle={{
                                                marginBottom: 5,
                                            }}
                                        >
                                            {original_title}
                                        </TextCustome>
                                        <Tag
                                            isLight={isLight}
                                            fontSize="9px"
                                            borderRadius="5px"
                                        >
                                            <Ionicons
                                                name="star"
                                                size={10}
                                                color={pallete.yellow8}
                                            />{" "}
                                            {vote_average}
                                        </Tag>
                                        <TextCustome
                                            fontSize={fontSize.md}
                                            fontColor={
                                                isLight
                                                    ? pallete.gray2
                                                    : pallete.gray4
                                            }
                                            customeStyle={{
                                                marginTop: 5,
                                            }}
                                        >
                                            {overview.length <= 170
                                                ? overview
                                                : `${overview.slice(
                                                      0,
                                                      170
                                                  )}...`}
                                        </TextCustome>
                                    </MovieDescriptionWrapper>
                                </MovieWrapper>
                            </BlurView>
                        </MovieCard>
                    )
                )}
        </Swiper>
    )
}

export default MovieSlider
