import { AxiosPromise } from 'axios'
import request from '@/utils/request.ts'
import { CompletionRequest } from '@/api/completion/types.ts'

export function stream_completion(data: CompletionRequest): AxiosPromise {
  return request({
    url: '/completions/stream',
    method: 'post',
    data,
  })
}

export function sync_completion(data: CompletionRequest): AxiosPromise {
  return request({
    url: '/completions/sync',
    method: 'post',
    data,
  })
}
