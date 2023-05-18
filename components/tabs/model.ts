export type Category = {
    id: number;
    name: string;
    icon:string;
    labels: Label[];
};

export type Label = {
    id: number;
    name: string;
    url: string;
};