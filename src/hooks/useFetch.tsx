'use client';

import { useState, useEffect } from 'react';

export default function useFetch(urlApi: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError((error as Error).message);
                setLoading(false);
            }
        };

        fetchData();
    }, [urlApi]);

    return { data, loading, error };
}