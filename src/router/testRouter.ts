import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    return res.send('test');
  } catch (e) {
    throw new ServerError('TEST_ERROR', {info: 500});
  }
});

export default router;
