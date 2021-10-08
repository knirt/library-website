export interface BOOK {
    id: number;
    title: string;
    author: string;
    secondAuth: string;
    publisher: string;
    datePub: number;
    dateWrit: number;
    price: number;
    isTranslated: boolean;
    imageRef: any;
    inCart: boolean;
    tags: string[];
}

export enum Tags {
    POLITICS = "Politics",
    ETHICS = "Ethics",
    LIT = "Literature",
    META = "Metaphysics",
    THEOLOGY = "Theology",
    EPIS = "Epistemology",
    MYSTICISM = "Mysticism",
    PSYCH = "Psychology",
}
