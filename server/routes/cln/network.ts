import exprs from 'express';
const { Router } = exprs;
import { isAuthenticated } from '../../utils/authCheck.js';
import { getRoute, listChannels, feeRates, listNodes } from '../../controllers/cln/network.js';

const router = Router();

router.post('/listNodes', isAuthenticated, listNodes);
router.post('/getRoute', isAuthenticated, getRoute);
router.post('/feeRates', isAuthenticated, feeRates);
router.post('/listChannels', isAuthenticated, listChannels);

export default router;
