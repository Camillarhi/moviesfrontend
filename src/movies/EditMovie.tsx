import { genreDTO } from "../Genre/genres.module";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
    
    const nonSelectedGenres: genreDTO[] = [{id:1, name: "Comedy"}]
    const selectedGenres: genreDTO[] = [{id:2, name: "Drama"}]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = 
    [ {id:2, name: "Agora"}]

    const selectedMovieTheaters : movieTheaterDTO[] = 
    [{id:1, name: "Sambil"}]



    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title: "Toy Story", inTheaters: true, trailer: "url",
            releaseDate: new Date("2021-10-10T00:00:00")}}
            onSubmit={values => console.log(values)}
            nonSelectedGenres= {nonSelectedGenres}
            selectedGenres= {selectedGenres}
            
            nonSelectedMovieTheaters= {nonSelectedGenres}
            selectedMovieTheaters={selectedMovieTheaters} />
        </>
    )
}