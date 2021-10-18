import { Options } from "./options";
import { Logger } from "./logger";

import { Level } from "./level";

const options = new Options();
const logger = new Logger(options);

export { Level, logger, options };
