import { useCallback } from "react"

function useItemLayout(itemHeight: number) {
    const getItemLayout = useCallback(
        (data, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
        }),
        []
    )

    return getItemLayout
}

export default useItemLayout
