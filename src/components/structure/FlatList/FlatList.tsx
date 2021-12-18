import React, { useCallback } from "react"

import { FlatListProps as RnFlatListProps } from "react-native"

import useItemLayout from "@hooks/useItemLayout"

import { FlatListContaiener } from "./FlatList.style"

interface FlatListProps<DataType>
    extends Omit<RnFlatListProps<DataType>, "renderItem"> {
    data: Readonly<DataType[]>
    RenderElement: ({
        data,
        index,
    }: {
        data: DataType
        index: number
    }) => JSX.Element
    keyExtractor: (item: DataType, index: number) => string
    itemHeight: number
    // horizontal: boolean
    // refreshing?: boolean
    // onRefresh?: () => void
    // ItemSeparatorComponent?: React.ComponentType<any>
    // contentContainerStyle?: StyleProp<ViewStyle>
    // ListHeaderComponent?: ReactElement
    // ListHeaderComponentStyle?: StyleProp<ViewStyle>
    // ListFooterComponent?: ReactElement
    // ListFooterComponentStyle?: StyleProp<ViewStyle>
    // showsHorizontalScrollIndicator?: boolean
    // showsVerticalScrollIndicator?: boolean
}

function FlatList<DataType>({
    data,
    RenderElement,
    keyExtractor,
    horizontal,
    itemHeight,
    refreshing,
    onRefresh,
    ItemSeparatorComponent,
    contentContainerStyle,
    ListHeaderComponent,
    ListHeaderComponentStyle,
    ListFooterComponent,
    ListFooterComponentStyle,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
}: FlatListProps<DataType>) {
    const getItemLayout = useItemLayout(itemHeight)

    const renderItem = useCallback(({ item: dataList, index }) => {
        return <RenderElement data={dataList} index={index} />
    }, [])

    return (
        <FlatListContaiener
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={data}
            renderItem={renderItem}
            horizontal={horizontal}
            disableVirtualization={false}
            removeClippedSubviews={false}
            getItemLayout={getItemLayout}
            //@ts-ignore
            keyExtractor={keyExtractor}
            contentContainerStyle={contentContainerStyle}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListHeaderComponent={ListHeaderComponent}
            ListHeaderComponentStyle={ListHeaderComponentStyle}
            ListFooterComponent={ListFooterComponent}
            ListFooterComponentStyle={ListFooterComponentStyle}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        />
    )
}

export default FlatList
