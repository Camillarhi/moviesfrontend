import { useRef, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps) {

    const actors: actorMovieDTO[] =[
        {id: 1, name: "Felipe", character: "", picture: "https://th.bing.com/th/id/OIP.lWLGLTGt7bZBOMvcXvdArQHaF6?w=214&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"},
        {id: 2, name: "Fernando", character: "", picture: "https://th.bing.com/th/id/OIP.M9XsgXyc5s40vrQj0blE5AHaFY?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"},
        {id: 3, name: "Jessica", character: "", picture: "https://th.bing.com/th/id/OIP.DPk8sVdpmfzJ-TUIU0FqIgHaKp?w=186&h=267&c=7&r=0&o=5&dpr=1.1&pid=1.7"},
    ]

    const m = useRef(null);
    const [sugs, setSugs] = (useState([])) as any;
    const suggestions: any[] = [];


    const doSth = (event: any) => {
        
        const returnedData: any = actors.find(actor => actor.name.toLowerCase() === event.target.value.toLowerCase());
        if(returnedData) {
            suggestions.push(returnedData);
            setSugs(suggestions);
        }

    }
    return(
        <div className="mb-3">
            <label >{props.displayName} </label>
            <input  type="text" onChange={doSth}  />
            { sugs.length > 0 && sugs.map((sug: any) => 
            <div key={sug.id}>
                {sug.name}
            </div> 
                )}

            <div>

            </div>
            {/* <Typeahead
            id="typeahead"
            onChange= {actor => {
                console.log(actor);
            }} 
            options={}
            labelKey={'dff'}
            filterBy={["name"]}
            placeholder="Write the name of the actor..."
            minLength={1}
            /> */}
        </div>
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
}

interface myValue {
    value: string;
}