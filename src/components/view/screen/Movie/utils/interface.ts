export interface MovieData {
    poster_path: string | null
    backdrop_path: string | null
    adult: boolean
    overview: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
    release_date: string
}

export interface TrendingMovieData extends MovieData {
    total_pages: number
    total_results: number
}
