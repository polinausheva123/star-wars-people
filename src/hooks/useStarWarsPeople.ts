import { useState, useEffect, useCallback } from "react";
import type { StarWarsPerson } from "../types/starwars";

interface SWAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsPerson[];
}

export interface UseStarWarsPeopleResult {
  data: StarWarsPerson[] | null;
  count: number;
  totalPages: number;
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
  refetch: () => void;
}

const ITEMS_PER_PAGE = 10;

export const useStarWarsPeople = (
  page: number = 1,
): UseStarWarsPeopleResult => {
  const [data, setData] = useState<StarWarsPerson[] | null>(null);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [reloadTrigger, setReloadTrigger] = useState<number>(0);

  const refetch = useCallback(() => {
    setReloadTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPeople = async () => {
      if (!data) {
        setIsLoading(true);
      }
      setIsFetching(true);
      setError(null);

      try {
        const response = await fetch(
          `https://swapi.py4e.com/api/people/?page=${page}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data (HTTP ${response.status})`);
        }

        const json: SWAPIResponse = await response.json();
        setData(json.results);
        setCount(json.count);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") return;
          setError(err);
        } else {
          setError(new Error("An unknown error occurred."));
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
          setIsFetching(false);
        }
      }
    };

    fetchPeople();

    return () => {
      controller.abort();
    };
  }, [page, reloadTrigger]);

  const totalPages = count ? Math.ceil(count / ITEMS_PER_PAGE) : 1;

  return { data, count, totalPages, isLoading, isFetching, error, refetch };
};
