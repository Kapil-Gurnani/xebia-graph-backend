export type PersonAPIData = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export type PersonResponse = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: {
        title: string;
        episode: string;
    }[];
    species: string[];
    vehicles: {
        name: string;
        model: string;
        class: string;
        cost: number | null;
    }[];
    starships: {
        name: string;
        model: string;
        class: string;
        cost: number | null;
    }[];
    created: string;
    edited: string;
    url: string;
}