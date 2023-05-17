export type Category = {
    id: number;
    name: string;
    labels: Label[];
};

export type Label = {
    id: number;
    name: string;
    url: string;
};