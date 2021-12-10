export const API_KEY = "6b62dc478a01071b4521cf9b55154456"

export const makeImagePath = (imageURL: string, width: string = "w500") => {
    const baseURL = "https://image.tmdb.org/t/p/"
    return `${baseURL}${width}${imageURL}`
}

type DataInfoQuery = "now_playing" | "upcoming" | "trending"

const getMovieURL = (dataInfoQuery: DataInfoQuery) => {
    if (dataInfoQuery === "trending")
        return `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    return `https://api.themoviedb.org/3/movie/${dataInfoQuery}?api_key=${API_KEY}&language=en-US&page=1&region=KR`
}

export const getMovieList = async (dataInfoQuery: DataInfoQuery) => {
    const response = await fetch(getMovieURL(dataInfoQuery))
    const { results } = await response.json()
    return results
}
