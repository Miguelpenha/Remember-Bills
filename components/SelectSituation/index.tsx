import { Dispatch, SetStateAction, FC } from 'react'
import ISituation from '../../types/situation'
import useStyles from './useStyles'
import SelectRaw from 'react-select'
import Control from './Control'

interface IProps {
    setSituation: Dispatch<SetStateAction<ISituation | undefined>>
}

const options = [
    { value: undefined, label: 'Todas' },
    { value: 'paid', label: 'Pagas' },
    { value: 'unpaid', label: 'Não pagas' },
    { value: 'waiting', label: 'Em espera' }
]

const SelectSituation: FC<IProps> = ({ setSituation }) => {
    const styles = useStyles()
    
    return (
        <SelectRaw
            styles={styles}
            options={options}
            instanceId="situation"
            components={{ Control }}
            defaultValue={options[0]}
            onChange={newValue => setSituation((newValue as any).value)}
        />
    )
}

export default SelectSituation