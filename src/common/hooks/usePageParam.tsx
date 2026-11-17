import {useSearchParams} from "react-router";

export const usePageParam = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentPage = Number(searchParams.get("page")) || 1

    const pageChangeHandler = (page:  number) => {
        setSearchParams((prev) => {
            prev.set('page', String(page));
            return prev;
        });
    }

    return {searchParams, setSearchParams, currentPage, pageChangeHandler};
};