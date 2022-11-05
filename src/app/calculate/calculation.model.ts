import { Timestamp } from "firebase-admin/firestore";

export interface Calculation {
    id: string;
    date: Timestamp;
    result: number;
}
