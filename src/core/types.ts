
export type Employer = {
    id: number;
    name: string;
    city: string;
    county: string;
    rating: string;
    route: string;
}

export type Data = {
    content: Employer[];
    pageNum: number;
    pageSize: number;
    totalElementsCount: number;
    totalPagesCount: number;
    lastPage: boolean;
}

export type Routes = string[];
export type Cities = string[];
export type Counties = string[];
