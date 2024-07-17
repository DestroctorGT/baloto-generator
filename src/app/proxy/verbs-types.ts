
export interface Response<Data> {
  data?: Data
  status: ResponseType | null
  statusCode: number | string
  message?: string
  count?: number
  currentPage?: number
  nextPage?: number
  prevPage?: number
  lastPage?: number
}

export type MethodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export enum ResponseType {
  Ok = 'OK',
  Error = 'ERROR'
}

export enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export enum ResponseStatus {
  IsLoading = 'IS_LOADING'
}
