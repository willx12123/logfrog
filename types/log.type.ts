import { LevelStr } from "../level";

export type LogType = {
  // Unix 毫秒时间戳
  timestamp: number;
  level: LevelStr;
  message: string;
  extraFields?: { [key: string]: any };
};
