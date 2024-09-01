import { IMovie } from "./imovie";

export interface MovieResponse{
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}