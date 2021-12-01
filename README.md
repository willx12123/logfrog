# logfrog

## Introduce 简介

Logger lib for front end.

1. Log level control: `DEBUG`, `INFO`, `WARN`, `ERROR`.
2. Log output format. Logman can print TEXT or JSON log.
3. Server log. Request your custom api with log.

前端日志库。

1. 日志等级控制 `DEBUG`, `INFO`, `WARN`, `ERROR`
2. 日志格式化输出，可输出文本格式或 JSON 格式
3. 服务端日志，传输日志至指定接口

## Install 安装

```bash
npm i logfrog
# or
yarn add logfrog
```

## Example 示例

```ts
import { logger, Level, options } from "logfrog";

options.setLevel(Level.WARN);
options.setFormatter("json"); // "json" | "text"
options.setWriter("server"); // "server" | "console" | "all"
options.setRequestUrl("https://localhost:8080/logs");

logger.info("Init Successfully.");
logger.warn("Should warning you first.");
logger.error("Did task fail.");
```

```ts
// JSON output type.
// JSON 输出格式。

// Request body.
// 发送至服务器的数据格式。

export type LogType = {
  // Unix ms
  timestamp: number;
  level: LevelStr;
  message: string;
  extraFields?: { [key: string]: any };
};
```
