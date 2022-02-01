import { intersection } from './intersection'

export const timesInArray = <T>(array: T[], value: T) => intersection<T>(array, [value]).length
