import { LogType } from "./types/log.type";

import { formatToText } from "./formatter";

import { Level, LevelStr } from "./level";

import { Options } from "./options";
import axios from "axios";

const consolersMap = new Map([
  [LevelStr.DEBUG, console.debug],
  [LevelStr.INFO, console.info],
  [LevelStr.WARN, console.warn],
  [LevelStr.ERROR, console.error],
]);

const levelStringsMap = new Map<Level, LevelStr>([
  [Level.DEBUG, LevelStr.DEBUG],
  [Level.INFO, LevelStr.INFO],
  [Level.WARN, LevelStr.WARN],
  [Level.ERROR, LevelStr.ERROR],
]);

export class Logger {
  constructor(private options: Options) {
  }

  debug(...args: any[]) {
    if (this.options.level > Level.DEBUG) {
      return;
    }

    this.output(Level.DEBUG, ...args);
  }

  info(...args: any[]) {
    if (this.options.level > Level.INFO) {
      return;
    }

    this.output(Level.INFO, ...args);
  }

  warn(...args: any[]) {
    if (this.options.level > Level.WARN) {
      return;
    }

    this.output(Level.WARN, ...args);
  }

  error(...args: any[]) {
    if (this.options.level > Level.ERROR) {
      return;
    }

    this.output(Level.ERROR, ...args);
  }

  output(level: Level, ...args: any[]) {
    const now = +new Date();

    const log: LogType = {
      timestamp: now,
      level: levelStringsMap.get(level) ?? LevelStr.DEBUG,
      message: this.argsToMessage(...args),
    };

    switch (this.options.writer) {
      case "all":
        this.logToConsole(log);
        this.logToServer(log);
        break;
      case "server":
        this.logToServer(log);
        break;
      default:
        this.logToConsole(log);
        break;
    }
  }

  private logToConsole(log: LogType) {
    const consoler = consolersMap.get(log.level) ?? console.debug;
    this.options.formatter === "json" ? consoler(log) : consoler(formatToText(log));
  }

  private logToServer(log: LogType) {
    if (this.options.requestUrl === "") {
      return;
    }

    axios.post(this.options.requestUrl, {
      ...log,
    }).catch((err) => console.error("Report log api request fail.", err));
  }

  private argsToMessage(...args: any[]) {
    return args
      .map((m) => {
        switch (typeof m) {
          case "bigint":
          case "number":
          case "string":
          case "symbol":
            return m;
          case "boolean":
            return m ? "true" : "false";
          case "function":
          case "undefined":
            return "";
          case "object":
            if (!m) {
              return "";
            }

            if (m.toString) {
              return m.toString();
            }

            try {
              return JSON.stringify(m);
            } catch (_) {
              return "";
            }
        }
      })
      .filter((s) => s !== "")
      .join(" ");
  }
}
