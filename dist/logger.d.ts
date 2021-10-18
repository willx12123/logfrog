import { Level } from "./level";
import { Options } from "./options";
export declare class Logger {
    private options;
    constructor(options: Options);
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    output(level: Level, ...args: any[]): void;
    private logToConsole;
    private logToServer;
    private argsToMessage;
}
