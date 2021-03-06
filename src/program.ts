import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { cliPath } from './fs'
let _node_location: string
let program_location: string
export function locations(node: string, program: string) {
	_node_location = node
	program_location = program
}
export interface IPackage {
	name: string,
	/**
	 * relative path to bins
	 */
	bin: {
		[key: string]: string
	}
	/**
	 * relative path
	 */
	main: string
	version: string
	installation_dir: string
}
export function information() {
	const packageInformation = JSON.parse(readFileSync(cliPath('package.json'), 'utf-8')) as IPackage
	const installationPaath = dirname(program_location)
	for(const key of Object.keys(packageInformation.bin)) {
		packageInformation.bin[key] =  join(installationPaath, packageInformation.bin[key])
    }
    return {
        name: packageInformation.name, 
        bin: packageInformation.bin,
        main: packageInformation.main,
		version: packageInformation.version,
		installation_dir: installationPaath
    } as IPackage
}