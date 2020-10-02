import mongoose, { Model } from 'mongoose';
import database from './db';

export interface Task {
    id: string;
    description: string;
    type: 'user' | 'imported';
    duration?: number;
    deadline?: Date;
    startTime?: Date;
    endTime?: Date;
}

export interface TaskMap {
    [key: string]: Array<Task>;
}

export interface UserInterface extends mongoose.Document {
    name: string;
    username: string;
    email: string;
    premium: boolean;
    tasks: TaskMap;
    accessToken?: string;
}

export interface PhraseTimeMapInterface extends mongoose.Document {
    phrase: string;
    time: number;
    count: number;
}

const taskMapSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['user', 'imported'],
    },
    duration: {
        type: Number,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    deadline: {
        type: Date,
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    premium: {
        type: Boolean,
        default: false,
    },
    tasks: {
        type: taskMapSchema,
        default: {},
    },
    accessToken: {
        type: String,
    },
});

const phraseTimeMapSchema = new mongoose.Schema({
    phrase: String,
    time: Number,
    count: Number,
});

export const User: Model<UserInterface> = database.model('User', userSchema);
export const PhraseTimeMap: Model<PhraseTimeMapInterface> = database.model('PhraseTimeMap', phraseTimeMapSchema);
