import { Request, Response } from 'express';
import skis from '../data/skis';

export const getAllSkis = (req: Request, res: Response) => {
    res.json(skis);
};

export const getSkiById = (req: Request, res: Response) => {
    const ski = skis.find(s => s.id === parseInt(req.params.id));
    if (!ski) return res.status(404).json({ message: 'Ski not found' });
    res.json(ski);
};
