import express from 'express';
import { sayHi } from '../controller/user';

const router = express.Router();

router.get('/', sayHi);

export default router;
