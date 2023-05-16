import { AxiosRequestConfig } from 'axios'
import useSWR from 'swr'
import base from './base'

export function get<Idata>(url: string, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async () => {
        const { data } : { data: Idata } = await base.get(url, config)

        return data
    })

    return { data, error, mutate }
}

export function post<Idata, IdataParams>(url: string, dataParams?: IdataParams, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async () => {
        const { data } : { data: Idata } = await base.post(url, dataParams, config)

        return data
    })

    return { data, error, mutate }
}

export function deleteMethod<Idata>(url: string, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async () => {
        const { data } : { data: Idata } = await base.delete(url, config)

        return data
    })

    return { data, error, mutate }
}

export function patch<Idata, IdataParams>(url: string, dataParams?: IdataParams, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async () => {
        const { data } : { data: Idata } = await base.patch(url, dataParams, config)

        return data
    })

    return { data, error, mutate }
}

const api = {
    get,
    post,
    deleteMethod,
    patch
}

export default api