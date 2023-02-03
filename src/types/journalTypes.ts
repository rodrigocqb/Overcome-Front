export type Journal = {
    id: number;
    userId: number;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}

export type JournalPageParams = {
    id: number;
    date: string;
    text: string;
}