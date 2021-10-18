import { WriterType } from "./types/writer.type";
import { FormatterType } from "./types/formatter.type";
import { Level } from "./level";
export declare class Options {
    private _level;
    private _writer;
    private _formatter;
    private _requestUrl;
    get level(): Level;
    setLevel(value: Level): void;
    get writer(): WriterType;
    setWriter(value: WriterType): void;
    get formatter(): FormatterType;
    setFormatter(value: FormatterType): void;
    get requestUrl(): string;
    setRequestUrl(url: string): void;
}
