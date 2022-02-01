export const intersection = <T>(array1: T[], array2: T[]): T[] => array1.filter(x => array2.includes(x))
