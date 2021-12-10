import React from "react"
import { Dimensions, StyleSheet, Text } from "react-native"

import useThemeMode from "@/hooks/useThemeMode"

import Swiper from "react-native-swiper"
import { BlurView } from "expo-blur"

import { makeImagePath } from "../utils/getMovieData"
import { MovieData } from "../utils/interface"

import {
    MovieCard,
    MovieCardBackground,
    MovieCardPoster,
    MovieDescirption,
    MovieDescriptionWrapper,
    MovieRate,
    MovieTitle,
    MovieWrapper,
} from "./MovieSlider.style"
import Image from "@/components/atoms/Image/Image"
import borderRadius from "@/utils/style/borderRadius"
import Tag from "@/components/molecules/Tag/Tag"
import { Ionicons } from "@expo/vector-icons"
import pallete from "@/utils/style/pallete"

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
                                <MovieCardBackground
                                    style={StyleSheet.absoluteFill}
                                    source={{
                                        uri: makeImagePath(backdrop_path),
                                    }}
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
                                            height="160px"
                                            borderRadius={borderRadius.bxlg}
                                            uri={makeImagePath(poster_path)}
                                        />
                                    )}

                                    <MovieDescriptionWrapper>
                                        <MovieTitle>
                                            {original_title}
                                        </MovieTitle>
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
                                        <MovieDescirption isLight={isLight}>
                                            {overview.length <= 170
                                                ? overview
                                                : `${overview.slice(
                                                      0,
                                                      170
                                                  )}...`}
                                        </MovieDescirption>
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
