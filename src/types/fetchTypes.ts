export interface headerAndBodyObject {
    [key: string]: number | string | object;
}

export interface ToDoDTO {
    id: string;
    ownerId: string;
    taskContent: string;
    category: string;
    priority: 1 | 2 | 3 | 4 | 5;
    isOpen: 0 | 1;
    dueDate: Date | string;
}

export interface ToDoObject extends ToDoDTO {
    createdAt: Date;
    closedAt?: Date;
}