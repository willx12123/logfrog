import { WriterType } from "./types/writer.type";
import { FormatterType } from "./types/formatter.type";

import { Level } from "./level";

export class Options {
  private _level: Level = Level.INFO;
  private _writer: WriterType = "console";
  private _formatter: FormatterType = "text";
  private _requestUrl = "";

  get level(): Level {
    return this._level;
  }

  setLevel(value: Level) {
    this._level = value;
  }

  get writer(): WriterType {
    return this._writer;
  }

  setWriter(value: WriterType) {
    this._writer = value;
  }

  get formatter(): FormatterType {
    return this._formatter;
  }

  setFormatter(value: FormatterType) {
    this._formatter = value;
  }

  get requestUrl(): string {
    return this._requestUrl;
  }

  setRequestUrl(url: string) {
    this._requestUrl = url;
  }
}
