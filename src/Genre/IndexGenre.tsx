import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../Utils/Button";
import GenericListComponent from "../Utils/GenericListComponent";
import Pagination from "../Utils/Pagination";
import RecordsPerPage from "../Utils/RecordsPerPage";
import { genreDTO } from "./genres.module";

export default function IndexGenre() {

    const [genres, setGenres] = useState<genreDTO[]>();
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordPerPages] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get("https://localhost:44367/api/genres", {
            params: {page, recordsPerPage}
        })
            .then((response: AxiosResponse<genreDTO[]>) => {
                const totalAmountOfRecords = parseInt(response.headers["totalAmountOfRecords"])
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setGenres(response.data);
            })
    }, [page, recordsPerPage])

    return (
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>
           <RecordsPerPage onChange={amountOfRecords => {
               setPage(1);
               setRecordPerPages(amountOfRecords);
           } }/>
            <GenericListComponent list={genres}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map(genre =>
                            <tr key={genre.id}>
                                <td>
                                    <Link className="btn btn-success"
                                        to={`/genres/${genre.id}`}>Edit</Link>
                                    <Button className="btn btn-danger">Delete</Button>
                                </td>
                                <td>{genre.name}</td>

                            </tr>)}
                    </tbody>

                </table>

            </GenericListComponent>
            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPage(newPage)} />
        </>
    )
}