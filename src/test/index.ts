process.env.MCE_DEV = 'true'
process.env.MCE_TEST = 'test'
process.env.MCE_VERBOSE = '0'
export * from './stdin'
export * from './stdout'
export * from './mce'
export * from './input'
export * from './package-json'
export * from './spawn'
export * from './tree-maker'
import './global-jest'