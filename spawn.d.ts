/// <reference types="node" />
import { SpawnOptions } from 'child_process';
declare function exec(cmd: string, options: string[], config: SpawnOptions, truefalse?: boolean): Promise<{}>;
export { exec as spawn };