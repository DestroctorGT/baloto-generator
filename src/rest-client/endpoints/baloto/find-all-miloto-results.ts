import { ApiBaloto } from '@/enums/api'
import { get } from '@/proxy/verbs'
import { MiLotoResults } from '@/rest-client/models/baloto/miloto'

export const findAllMilotoResults = async (): Promise<MiLotoResults[] | undefined> => {
  const { data } = await get<MiLotoResults[]>(`${ApiBaloto.ApiBaloto}${ApiBaloto.ApiLastMiLotoResults}`)

  if (data != null) {
    return data
  }
}
