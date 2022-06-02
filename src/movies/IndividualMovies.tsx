import { movieDTO } from "./movies.model";
import css from './IndividualMovie.module.css';
import { Link } from "react-router-dom";
import Authorize from "../Auth/Authorize";
import Button from "../Utils/Button";

export default function IndividualMovie(props: movieDTO) {

    const buildLink = () => `/movie/${props.id}`

    return (
        <div className={css.div}>
            <Link to={buildLink()}>
                <img src={props.poster} alt="Poster" />
            </Link>
            <p>
                <Link to={buildLink()}>{props.title}</Link>
            </p>

            <Authorize
            role="admin"
                authorize={<>
                    <div>
                        <Link style={{ marginRight: "1rem" }} className="btn btn-info"
                            to={`/movie/edit/${props.id}`}>Edit</Link>
                        <Button onClick={() => console.log("delete")} className="btn btn-danger">Delete</Button>
                    </div>
                </>} />
        </div>
    )
}