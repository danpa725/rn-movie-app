import React, { ReactElement } from "react"
import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"
import shadow from "@utils/style/shadow"

import useThemeMode from "@hooks/useThemeMode"

import { TvData } from "@api/tv/interface/interface"
import { makeImagePath } from "@api/utils/makeImagePath"

import Gradient from "@components/atoms/Gradient/Gradient"
import Image from "@components/atoms/Image/Image"
import Text from "@components/atoms/Text/Text"
import Tag from "@components/molecules/Tag/Tag"
import Title from "@components/molecules/Title/Title"
import FlatList from "@components/structure/FlatList/FlatList"

import {
    BoxContainer,
    HorizontalSeperator,
    InfoContainer,
    SectionContainer,
    TagContainer,
} from "./TvHorizontalList.style"

interface TvHorizontalListProps {
    tvData: TvData[]
    Icon: ReactElement
    title: string
}

function TvHorizontalList({ tvData, Icon, title }: TvHorizontalListProps) {
    return (
        <SectionContainer>
            <Title
                Icon={Icon}
                title={title}
                fontSize="xlg"
                customeStyle={{
                    marginLeft: 20,
                }}
            />
            <FlatList
                data={tvData}
                RenderElement={({ data }) => <TvScreenRender data={data} />}
                keyExtractor={(item: any) => String(item.id)}
                horizontal={true}
                itemHeight={300}
                ItemSeparatorComponent={HorizontalSeperator}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                }}
                showsHorizontalScrollIndicator={false}
            />
        </SectionContainer>
    )
}

const TvScreenRender = ({
    data: { poster_path, id, popularity, vote_average, name },
}: {
    data: TvData
}) => {
    const isLight = useThemeMode()

    return (
        <BoxContainer key={id} isLight={isLight} style={shadow.sm}>
            {poster_path && (
                <Image
                    width="160px"
                    height="285px"
                    borderRadius="bxxlg"
                    uri={makeImagePath(poster_path)}
                />
            )}
            {!poster_path && (
                <Gradient
                    startColor={pallete.teal10}
                    endColor={pallete.teal6}
                    startPos={{
                        x: 0,
                        y: 1,
                    }}
                    endPos={{
                        x: 1,
                        y: 0,
                    }}
                    customeStyle={{
                        width: 160,
                        height: 285,
                        borderRadius: 7.5,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Ionicons
                        name="beer"
                        color={isLight ? pallete.white : pallete.gray2}
                        size={85}
                    />
                </Gradient>
            )}

            <InfoContainer style={shadow.lg} isLight={isLight}>
                <Text
                    fontSize="md"
                    fontWeight={700}
                    customeStyle={{ marginBottom: 7.5 }}
                >
                    <>{name.length > 23 ? name.slice(0, 23) : name}</>
                </Text>
                <TagContainer>
                    <Tag
                        isLight={isLight}
                        borderRadius="bRound"
                        fontSize="sm"
                        customeStyle={{
                            marginRight: 10,
                        }}
                    >
                        <Ionicons
                            name="star"
                            color={isLight ? pallete.yellow8 : pallete.yellow4}
                        />{" "}
                        {vote_average}
                    </Tag>
                    <Tag isLight={isLight} borderRadius="bRound" fontSize="sm">
                        <Ionicons
                            name="arrow-up"
                            color={isLight ? pallete.yellow8 : pallete.yellow4}
                        />{" "}
                        {popularity}
                    </Tag>
                </TagContainer>
            </InfoContainer>
        </BoxContainer>
    )
}

export default TvHorizontalList
