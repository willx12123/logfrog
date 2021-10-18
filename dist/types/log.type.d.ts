import { LevelStr } from "../level";
export declare type LogType = {
    timestamp: number;
    level: LevelStr;
    message: string;
    extraFields?: {
        [key: string]: any;
    };
};
