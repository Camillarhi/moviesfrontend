import GenericListComponent from "../Utils/GenericListComponent";
import IndividualMovie from "./IndividualMovies";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css';

export default function MoviesList(props: moviesListProps) {

   return <GenericListComponent list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />)}
        </div>

    </GenericListComponent>





}

interface moviesListProps {
    movies?: movieDTO[];
}