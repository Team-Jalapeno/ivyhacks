import express from 'express';

import { User, PhraseTimeMap } from '../models';

const router = express.Router();

router.post('/sync', async (req, res) => {
    let { tasks } = req.body;
    tasks = tasks.toString();

    const username = '';

    await User.findOneAndUpdate({ username }, { $set: { tasks } });

    res.json({
        success: true,
        message: 'Synced',
    });
});

router.get('/getPhraseTime', async (req, res) => {
    let { phrase } = req.body;

    phrase = phrase.toString();

    const { time } = await PhraseTimeMap.findOne({ phrase });

    res.json({
        success: true,
        phrase: '',
        time,
    });
});

router.post('/setPhraseTime', async (req, res) => {
    let { phrase, time } = req.body;

    phrase = phrase.toString();
    time = parseInt(time.toString(), 10);

    await PhraseTimeMap.findOneAndUpdate({ phrase }, { $set: { time } });

    res.json({
        success: true,
        message: 'Added to known words',
    });
});

router.get('/', (_req, res) => {
    res.send('Why you here mate?');
});

export default router;
