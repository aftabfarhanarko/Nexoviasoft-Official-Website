"use client";
import { useState, useEffect, useCallback } from "react";

const BASE_URL = "http://localhost:3000";

const getFullUrl = (url) => {
    if (url.startsWith("/")) {
        return `${BASE_URL}${url}`;
    }
    return url;
};

/**
 * Custom hook for fetching data (GET requests)
 * Mimics RTK Query's useQuery
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Configuration options
 * @param {boolean} [options.skip=false] - If true, the query effectively hangs and doesn't run
 * @param {Array} [options.deps=[]] - Dependency array to trigger refetch
 * @returns {Object} { data, isLoading, isError, error, refetch }
 */
export const useQuery = (url, { skip = false, deps = [] } = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(!skip);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        if (skip) return;

        setIsLoading(true);
        setIsError(false);
        setError(null);

        try {
            const response = await fetch(getFullUrl(url));

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setIsError(true);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [url, skip]);

    useEffect(() => {
        fetchData();
    }, [fetchData, ...deps]);

    return { data, isLoading, isError, error, refetch: fetchData };
};

/**
 * Custom hook for mutating data (POST, PUT, DELETE, PATCH)
 * Mimics RTK Query's useMutation
 * @returns {[Function, Object]} [trigger, { data, isLoading, isError, error }]
 */
export const useMutation = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        isError: false,
        error: null,
    });

    const trigger = useCallback(async (url, { method = "POST", body, headers = {} } = {}) => {
        setState((prev) => ({ ...prev, isLoading: true, isError: false, error: null }));

        try {
            const response = await fetch(getFullUrl(url), {
                method,
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setState({ data: result, isLoading: false, isError: false, error: null });
            return { data: result };
        } catch (err) {
            setState({ data: null, isLoading: false, isError: true, error: err });
            return { error: err };
        }
    }, []);

    return [trigger, state];
};
