import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from '../mockable/fs'
// istanbul ignore next
export function remove (path: string) {
    if (existsSync(path)) {
        readdirSync(path).forEach(function(file){
            const curPath = path + '/' + file
            if (lstatSync(curPath).isDirectory()) { // recurse
                remove(curPath)
            } else { // delete file
                unlinkSync(curPath)
            }
        })
        rmdirSync(path)
    }
}