import { get } from '@/proxy/verbs'
import { ApiBaloto } from '@/enums/api'
import { GeneratePossibleBalotoNumber } from '@/rest-client/return-types/baloto/generate-possible-baloto-number'

export const generatePossibleBalotoNumber = async (): Promise<GeneratePossibleBalotoNumber | undefined> => {
  const { data } = await get<GeneratePossibleBalotoNumber>(`${ApiBaloto.ApiBaloto}${ApiBaloto.ApiGenerateNextBaloto}`)

  if (data != null) {
    return data
  }
}
