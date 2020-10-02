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

export interface User {
    name: string;
    email: string;
    premium: boolean;
    tasks: TaskMap;
    accessToken: string;
}
