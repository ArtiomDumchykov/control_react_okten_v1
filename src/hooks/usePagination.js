import { useEffect, useRef, useState } from "react";

import { movieService } from "../services";

function useFetching(callback, deps = 0) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        callback()
            .then(({ data }) => {
                setData((prevState) => {
                    if (prevState?.results) {
                        return { ...data, results: [...prevState?.results, ...data?.results] };
                    }
                    return data;
                });
            })
            .catch((e) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, [deps]);

    return { data, error, isLoading };
}

export function useScrollPagination(callback = movieService.getAll, params) {

    const lastElementRef = useRef(null);
    const observer = useRef();
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useFetching(callback.bind(null, {page, ...params }), page);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current?.disconnect();

        observer.current = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting && data?.page < data?.total_pages) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [isLoading]);

    return { lastElementRef, data, isLoading, error };
}


