import { ApiBaloto } from '@/enums/api'
import { get } from '@/proxy/verbs'

export const generatePossibleMilotoNumber = async (): Promise<number[] | undefined> => {
  const { data } = await get<number[]>(`${ApiBaloto.ApiBaloto}${ApiBaloto.ApiGenerateNextMiLoto}`)

  if (data != null) {
    return data
  }
}
