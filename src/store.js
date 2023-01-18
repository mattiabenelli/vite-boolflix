import { reactive } from "vue";
export const store = reactive({
    urlFilm: "https://api.themoviedb.org/3/search/movie?api_key=62237f7daf774ec5af10f8e4a4de5ed5&query=",
    urlSeries: "https://api.themoviedb.org/3/search/tv?api_key=62237f7daf774ec5af10f8e4a4de5ed5&query=",
    ApiFlag: "",
    searchText: "star",
    FilmList: [],
    SeriesList: []
})
{/* <img :src="https://www.countryflagicons.com/FLAT/64/${getFlag(details)}.png"> */ }