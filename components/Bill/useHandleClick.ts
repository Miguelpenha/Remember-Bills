import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import handlePayment from './handlePayment'

function useHandleClick(bill: IBill, mutate: KeyedMutator<IBill[]>) {
    async function handleClick() {
        await handlePayment(bill._id, !bill.paid)
        
        await mutate()
    }

    return handleClick
}

export default useHandleClick