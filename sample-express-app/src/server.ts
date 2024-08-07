import express, { Request, Response } from 'express';

const app = express();
const PORT = 3100;

interface Item {
    id: number;
    name: string;
}

const items: Item[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
];

app.get('/items', (req: Request, res: Response) => {
    res.json(items);
});

app.post('/items', (req: Request, res: Response) => {
    const newItem: Item = {
        id: items.length + 1,
        name: `item${items.length + 1}`,
    };
    items.push(newItem);
    res.json(newItem);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});