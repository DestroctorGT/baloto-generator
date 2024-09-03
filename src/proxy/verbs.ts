/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import axios from 'axios'
import { Methods, ResponseType, type Response } from './verbs-types'

const path = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:4000'

const baseHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createConfigurations = async <Data>(url: string, params: Record<string, unknown>, body: Data | undefined, headers: Record<string, string>, method: Methods) => {
  const newHeaders = { ...baseHeaders, ...headers }
  const queryParams = new URLSearchParams(params as Record<string, string>).toString()

  return {
    method,
    url: `${path}/${url}?${queryParams}`,
    headers: {
      ...newHeaders
    },
    data: body
  }
}

export const get = async <DataFromResponse>(url: string, params?: Record<string, unknown>, headers: Record<string, string> = {}): Promise<Response<DataFromResponse>> => {
  const configuration = await createConfigurations(url, params ?? {}, undefined, headers, Methods.Get)

  try {
    const response = await axios<Response<DataFromResponse | undefined>>(configuration)
    const { data, status, statusCode, count, currentPage, lastPage, nextPage, prevPage } = response.data

    return modelResponse({
      data,
      status,
      statusCode,
      count,
      currentPage,
      lastPage,
      nextPage,
      prevPage
    })
  } catch (error) {
    return handleError(error)
  }
}

export const post = async <DataFromResponse>(
  url: string,
  params?: Record<string, unknown>,
  body?: Record<string, unknown> | FormData,
  headers: Record<string, string> = {}
): Promise<Response<DataFromResponse>> => {
  const configuration = await createConfigurations(url, params ?? {}, body, headers, Methods.Post)

  try {
    const response = await axios<Response<DataFromResponse>>(configuration)

    const { data, status, statusCode, count, currentPage, lastPage, nextPage, prevPage } = response.data

    return modelResponse({
      data,
      status,
      statusCode,
      count,
      currentPage,
      lastPage,
      nextPage,
      prevPage
    })
  } catch (error) {
    return handleError(error)
  }
}

export const put = async <DataFromResponse>(
  url: string,
  params?: Record<string, unknown>,
  body?: Record<string, unknown>,
  headers: Record<string, string> = {}
): Promise<Response<DataFromResponse>> => {
  const configuration = await createConfigurations(url, params ?? {}, body, headers, Methods.Put)

  try {
    const response = await axios<Response<DataFromResponse>>(configuration)

    const { data, status, statusCode, count, currentPage, lastPage, nextPage, prevPage } = response.data

    return modelResponse({
      data,
      status,
      statusCode,
      count,
      currentPage,
      lastPage,
      nextPage,
      prevPage
    })
  } catch (error) {
    return handleError(error)
  }
}

export const patch = async <DataFromResponse>(
  url: string,
  params?: Record<string, unknown>,
  body?: Record<string, unknown>,
  headers: Record<string, string> = {}
): Promise<Response<DataFromResponse>> => {
  const configuration = await createConfigurations(url, params ?? {}, body, headers, Methods.Patch)

  try {
    const response = await axios<Response<DataFromResponse>>(configuration)

    const { data, status, statusCode, count, currentPage, lastPage, nextPage, prevPage } = response.data

    return modelResponse({
      data,
      status,
      statusCode,
      count,
      currentPage,
      lastPage,
      nextPage,
      prevPage
    })
  } catch (error) {
    return handleError(error)
  }
}

export const remove = async <DataFromResponse>(
  url: string,
  params?: Record<string, unknown>,
  body?: Record<string, unknown>,
  headers: Record<string, string> = {}
): Promise<Response<DataFromResponse>> => {
  const configuration = await createConfigurations(url, params ?? {}, body ?? null, headers, Methods.Delete)

  try {
    const response = await axios<Response<DataFromResponse>>(configuration)

    const { data, status, statusCode, count, currentPage, lastPage, nextPage, prevPage } = response.data

    return modelResponse({
      data,
      status,
      statusCode,
      count,
      currentPage,
      lastPage,
      nextPage,
      prevPage
    })
  } catch (error) {
    return handleError(error)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const modelResponse = <Data>(response: Response<Data>) => {
  const { data, status, statusCode, count, currentPage, lastPage, nextPage, prevPage, message } = response

  return {
    ...(data && { data }),
    ...(message && { message }),
    ...(count && { count }),
    ...(currentPage && { currentPage }),
    ...(lastPage && { lastPage }),
    ...(nextPage && { nextPage }),
    ...(prevPage && { prevPage }),
    status,
    statusCode
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type -- type-coverage:ignore-next-line
const handleError = (error: any) => {
  // type-coverage:ignore-next-line
  if (axios.isAxiosError(error)) {
    if (error.response != null) {
      // type-coverage:ignore-next-line
      const { status, statusCode, message } = error.response.data as Response<null>

      if (status) {
        return modelResponse({
          data: null,
          status,
          statusCode,
          message
        })
      }

      return modelResponse({
        data: null,
        status: ResponseType.Error,
        statusCode,
        message
      })
    }

    return modelResponse({
      data: null,
      status: ResponseType.Error,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      statusCode: error.code!,
      message: error.message
    })
  }

  return modelResponse({
    data: null,
    status: ResponseType.Error,
    statusCode: 500,
    message: 'Error desconocido'
  })
}
