export interface MovieData {
    poster_path?: string
    backdrop_path?: string
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export interface TrendingMovieData {
    poster_path?: string
    backdrop_path?: string
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
    total_pages: number
    total_results: number
}
