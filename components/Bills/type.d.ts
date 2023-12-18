import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import ISituation from '../../types/situation'

interface IProps {
    search: string
    bills: IBill[] | undefined
    mutate: KeyedMutator<IBill[]>
    situation: ISituation | undefined
}

export default IProps