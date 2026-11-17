import { useEffect } from "react";
import {useLocation, useSearchParams} from "react-router";


export const ScrollToTop = ()=> {
    const { pathname } = useLocation();

    const [params] = useSearchParams()

    const page = params.get("page");

    useEffect(() => {
        window.scrollTo(0, 0); // Перемещает скролл наверх при изменении URL
    }, [pathname, page]);

    return null;
}
