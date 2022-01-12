import axios from "axios";
import { useHistory } from "react-router";
import { urlGenres } from "../endpoints";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.module";

export default function CreateGenre() {
     const history= useHistory();

    async function create(genre: genreCreationDTO){
        try{
            await axios.post("https://localhost:44367/api/genres", genre);
            history.push('/genres');
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <h3>Create Genre</h3>

            <GenreForm model={{name: ''}}
            onSubmit={async value => {
               await create(value)
            }}
            />


        </>
    )
}