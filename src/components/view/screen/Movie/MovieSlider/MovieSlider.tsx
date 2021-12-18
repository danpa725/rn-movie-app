import React from "react"
import { Dimensions, StyleSheet } from "react-native"

import Swiper from "react-native-swiper"
import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"

import { makeImagePath } from "@api/utils/makeImagePath"
import { MovieData } from "@api/movie/interface/interface"

import pallete from "@utils/style/pallete"

import useThemeMode from "@hooks/useThemeMode"

import Image from "@components/atoms/Image/Image"
import Tag from "@components/molecules/Tag/Tag"
import Text from "@components/atoms/Text/Text"

import {
    MovieCard,
    MovieDescriptionWrapper,
    MovieWrapper,
} from "./MovieSlider.style"
interface MovieSliderProps {
    movieList: MovieData[]
}

function MovieSlider({ movieList }: MovieSliderProps) {
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
            {movieList.map((movie) => (
                <MovieSliderContent
                    movie={movie}
                    key="MovieSliderContentParent"
                />
            ))}
        </Swiper>
    )
}

const MovieSliderContent = ({
    movie: {
        id,
        backdrop_path,
        poster_path,
        original_title,
        overview,
        vote_average,
    },
}: {
    movie: MovieData
}) => {
    const isLight = useThemeMode()

    return (
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
                            borderRadius="bxlg"
                            uri={makeImagePath(poster_path)}
                        />
                    )}

                    <MovieDescriptionWrapper>
                        <Text
                            fontSize="xxlg"
                            fontColor={pallete.gray2}
                            fontWeight={700}
                            customeStyle={{
                                marginBottom: 5,
                            }}
                        >
                            {original_title}
                        </Text>
                        <Tag
                            isLight={isLight}
                            fontSize="xsm"
                            borderRadius="bxxlg"
                        >
                            <Ionicons
                                name="star"
                                size={10}
                                color={pallete.yellow8}
                            />{" "}
                            {vote_average}
                        </Tag>
                        <Text
                            fontSize="md"
                            fontColor={isLight ? pallete.gray2 : pallete.gray4}
                            customeStyle={{
                                marginTop: 5,
                            }}
                        >
                            {overview.length <= 170
                                ? overview
                                : `${overview.slice(0, 170)}...`}
                        </Text>
                    </MovieDescriptionWrapper>
                </MovieWrapper>
            </BlurView>
        </MovieCard>
    )
}

export default MovieSlider
