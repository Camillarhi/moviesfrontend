import { useEffect, useState } from "react"

export default function Pagination(props: paginationProps) {

    const [ linkModels, setLinkModels] = useState<linkModel[]>([]);

    useEffect(() => {
        const previousPageEnabled = props.currentPage !==1;
        const previousPage = props.currentPage - 1;
        const links: linkModel[]=[];

        links.push({
            text: "Previous",
            enabled: previousPageEnabled,
            page: previousPage,
            active:false

        });

        for(let i=1; i <= props.totalAmountOfPages;i++) {
            if (i >= props.currentPage - props.radio && i<= props.currentPage + props.radio) {
                links.push({
                    text: `${i}`,
                    active: props.currentPage ===1,
                    enabled: true,
                    page: i
                })
            }
        }

        const nextPageEnabled = props.currentPage !== props.totalAmountOfPages &&
            props.totalAmountOfPages > 0;
        const nextPage = props.currentPage + 1;
        
        links.push({
            text: "Next",
            page: nextPage,
            enabled: nextPageEnabled,
            active: false
        })

        setLinkModels(links);
    }, [props.currentPage, props.totalAmountOfPages, props.radio] )


    return <nav>
        <ul className="pagination justify-content-center">
            {linkModels.map(link => <li key={link.text}
            onClick={() => (link)}
            className={`page-item cursor ${(link)}`} >
               <span className="page-link">{link.text}</span>
                 </li>)}

        </ul>

    </nav>
}

interface linkModel {
    page:number;
    enabled: boolean;
    text: string;
    active: boolean;
}


interface paginationProps{
    currentPage: number;
    totalAmountOfPages: number;
    radio: number;
    onChange(page: number): void;
}