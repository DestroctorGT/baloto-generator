import { LastBalotoResults } from '@/rest-client/models/baloto/last-results'
import { ApiBaloto } from '@/enums/api'
import { get } from '@/proxy/verbs'

export const findAllBalotoResults = async (): Promise<LastBalotoResults[] | undefined> => {
  const { data } = await get<LastBalotoResults[]>(`${ApiBaloto.ApiBaloto}${ApiBaloto.ApiLastBalotoResults}`)

  if (data != null) {
    return data
  }
}
