import express from 'express';
import getList from '../controllers/lists';
const router = express.Router();

router.get('/:id', getList);

export default router;
