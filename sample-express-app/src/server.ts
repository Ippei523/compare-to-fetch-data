import express, { Request, Response } from 'express';

const app = express();
const PORT = 3100;

const allowCrossDomain = (req: Request, res: Response, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

interface Item {
    id: number;
    title: string;
}

const items: Item[] = [
    { id: 1, title: 'item1' },
    { id: 2, title: 'item2' },
    { id: 3, title: 'item3' },
];

app.get('/', (req: Request, res: Response) => {
    console.log('GET /');
    res.json({ id: 1, title: 'item1' });
    console.log('GET / done');
});

app.get('/item/:itemId', (req: Request, res: Response) => {
    const id = req.params.itemId;
    console.log(`GET /item/${id}`);
    res.json(items[Number(id) - 1]);
});

app.post('/items', (req: Request, res: Response) => {
    const newItem: Item = {
        id: items.length + 1,
        title: `item${items.length + 1}`,
    };
    items.push(newItem);
    res.json(newItem);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});