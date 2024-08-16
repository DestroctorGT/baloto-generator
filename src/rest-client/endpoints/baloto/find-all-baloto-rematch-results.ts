import { ApiBaloto } from '@/enums/api'
import { get } from '@/proxy/verbs'
import { LastBalotoResults } from '@/rest-client/models/baloto/last-results'

export const findAllBalotoRematchResults = async (): Promise<LastBalotoResults[] | undefined> => {
  const { data } = await get<LastBalotoResults[]>(`${ApiBaloto.ApiBaloto}${ApiBaloto.ApiLastBalotoResultsRematch}`)

  if (data != null) {
    return data
  }
}
