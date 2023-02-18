import { useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ListType } from "./list";

export interface DetailSearch {
    id: string;
}

const Details = () => {
    const [data, setData] = useState<ListType>();
    const { id }: DetailSearch = useSearch({ from: "/details" });
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const json = (await response.json());
            const { userId, ...mask } = json
            setData(mask);
        }
        getData();
    }, []);
    return (
        <div
            style={{
                position: 'relative',
                flexGrow: '1',
                maxHeight: '50vh',
                overflowY: 'auto'
            }}
        >
            <p>Details from id: {data?.id ?? id}</p>
            <p>Title: {data?.title ?? "No"}</p>
            <p>Completed: {data?.completed.toString() ?? "false"}</p>
        </div>
    );
};

export default Details;