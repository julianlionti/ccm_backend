import {createModel, createSchema, FinalDoc} from 'mc-helpers'

export type StoreProps = {name: string; address: string}

const schema = createSchema<StoreProps>({name: String, address: String})
export const StoreModel = createModel<StoreProps>('store', schema)
export type StoreDocument = FinalDoc<StoreProps>
