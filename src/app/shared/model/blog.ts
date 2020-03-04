export interface Preview {
    id: string;
    title: string;
    subtitle: string;
    url: string;
    author: string;
    category: string;
    tag?: Array<string>;
    date?: any;
    body: string;
}

export interface Post {
    author: string;
    body: string;
    category: string;
    date?: any;
​    id: string;
​​    idCategory: string;
​​    subtitle: string;
    tag?: Array<string>;
​​    title: string;
​​    url: string;
}
