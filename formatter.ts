import dayjs from "dayjs";

import { LogType } from "./types/log.type";

const timestampFormat = "YYYY/MM/DD - HH/mm/ss";

export function formatToText(log: LogType): string {
  let ret = `${log.level} [${dayjs(log.timestamp).format(timestampFormat)}] ${log.message}`;

  if (log.extraFields) {
    ret += Object.keys(log.extraFields)
      .map((key) => `${key}: ${log.extraFields![key]}`)
      .join("; ");
  }

  return ret;
}
