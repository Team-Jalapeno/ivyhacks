import express from 'express';

import { User } from '../models';

const router = express.Router();

router.get('/sync', async (req: express.Request, res: express.Response) => {
    const { tasks } = req.body;

    const username = '';

    await User.findOneAndUpdate({ username }, { $set: { tasks } });

    res.json({
        success: true,
        message: 'Synced',
    });
});

export default router;
