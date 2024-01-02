import { KeyedMutator } from 'swr'
import { IBill } from '../../../types'
import { FC } from 'react'
import handleReset from './handleReset'
import { Button } from './style'
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
        <Button loading loadingColor="red" title="Resetar" onClick={handleClick}>
            <Icon/>
        </Button>
    )
}

export default ButtonReset