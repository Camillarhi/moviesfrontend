import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { urlGenres } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.module";

export default function CreateGenre() {
     const history= useHistory();
     const [errors, setErrors] = useState<string[]>([])

    async function create(genre: genreCreationDTO){
        try{
            await axios.post("https://localhost:44367/api/genres", genre);
            history.push('/genres');
        }
        catch(error:any){
            if(error && error.response){
                setErrors(error.response.data);
            }

        }
    }

    return (
        <>
            <h3>Create Genre</h3>
        <DisplayErrors errors={errors} />
            <GenreForm model={{name: ''}}
            onSubmit={async value => {
               await create(value)
            }}
            />


        </>
    )
}