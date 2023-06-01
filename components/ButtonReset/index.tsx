import { KeyedMutator } from 'swr'
import { IBill } from '../../types'
import { FC } from 'react'
import handleReset from './handleReset'
import Button from '../buttons/Button'
import Icon from './Icon'

interface IProps {
    mutate: KeyedMutator<IBill[]>
}

const ButtonReset: FC<IProps> = ({ mutate }) => {
    async function handleClick() {
        await handleReset()

        await mutate()
    }

    return (
        <Button loading title="Resetar" onClick={handleClick}>
            <Icon/>
        </Button>
    )
}

export default ButtonReset