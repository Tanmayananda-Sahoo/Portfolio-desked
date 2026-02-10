import {Router} from 'express';
import { meetHandler } from '../controllers/user.controller.js';

const router = Router();

router
.route('/register')
.post(meetHandler);

export default router;