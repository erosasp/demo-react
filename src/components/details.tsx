import { useSearch } from "@tanstack/react-router";
export interface DetailSearch {
    id: string;
}
const Details = () => {
    const { id }: DetailSearch = useSearch({ from: "/details" });
    return (
        <div
            style={{
                position: 'relative',
                flexGrow: '1',
                maxHeight: '50vh',
                overflowY: 'auto'
            }}
        >
            DETAILS from id: {id}
        </div>
    );
};

export default Details;