export type Joke = {
    value: string;
    categories: string[];
    date?: string;
    icon_url: string;
    id: string;
    update_at: string;
    url: string;
};

export type Route = {
    href: string;
    name: string;
};

export type Categories = {
    data: string[];
};
