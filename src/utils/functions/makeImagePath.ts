export const makeImagePath = (imageURL: string, width: string = "w500") => {
    const baseURL = "https://image.tmdb.org/t/p/";
    return `${baseURL}${width}${imageURL}`;
};
