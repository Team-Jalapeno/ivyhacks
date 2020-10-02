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
    email: string;
    premium: boolean;
    tasks: TaskMap;
    accessToken?: string;
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

export const User: Model<UserInterface> = database.model('User', userSchema);
