import { readFileSync, writeFileSync } from "fs";
import { iter } from "./command";

export function render(source:string, data:object, dest?:string ) {
    let info = readFileSync(source, 'utf-8');
    for(const [key, value] of iter(data)) {
        info = info.replace(new RegExp(`{{${key}}}`, 'gm'), value);
    }
    if( dest ) {
        writeFileSync(dest, info);
        return dest;
    }
    return info;
} 