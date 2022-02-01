// Causes out of memory crash when building with all the words in a single file :(

import { words1 } from './words1'
import { words2 } from './words2'
import { words3 } from './words3'
import { words4 } from './words4'

export const words = [...words1, ...words2, ...words3, ...words4]
