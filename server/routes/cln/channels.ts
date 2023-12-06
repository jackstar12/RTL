import exprs from 'express';
const { Router } = exprs;
import { isAuthenticated } from '../../utils/authCheck.js';
import { listPeerChannels, openChannel, setChannelFee, closeChannel, listForwards, funderUpdatePolicy } from '../../controllers/cln/channels.js';

const router = Router();

router.get('/listPeerChannels', isAuthenticated, listPeerChannels);
router.post('/', isAuthenticated, openChannel);
router.post('/setChannelFee', isAuthenticated, setChannelFee);
router.post('/close/', isAuthenticated, closeChannel);

router.post('/listForwards', isAuthenticated, listForwards);

router.post('/funderUpdate', isAuthenticated, funderUpdatePolicy);

export default router;
