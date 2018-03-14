import mongoose from 'mongoose'

import { postItemSchema } from './postItem'


const postItemModel = mongoose.model('postItemSchema', postItemSchema);

export { postItemModel }
