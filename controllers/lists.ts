import { fetchList } from '../models/list';
import { Request, Response } from 'express';

const getList = async (req: Request, res: Response) => {
  const listId = parseInt(req.params.id, 10);
  try {
    const list = await fetchList(listId);
    console.log(list);
    return res.json(list);
  } catch (error) {
    console.error(error);
  }
};

export default getList;
