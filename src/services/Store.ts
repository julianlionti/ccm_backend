import {ApiError, BaseServices} from 'mc-helpers'
import {StoreErrors} from '../errors/Store.errors'
import {StoreModel, StoreProps} from '../models/Store'

interface NewProps {
  name: string
  address: string
}

class Service extends BaseServices<StoreProps> {
  constructor() {
    super(StoreModel)
  }

  New = async (props: NewProps) => {
    const {name} = props
    const check = await this.Exists({nombre: {$regex: new RegExp(name, 'i')}})
    if (check) throw new ApiError(StoreErrors.Exists)

    return await this.Create(props)
  }

  //   Find = (extraParams: any) => {
  //     return this.Model.aggregate()
  //   }
}

export const StoreService = new Service()
