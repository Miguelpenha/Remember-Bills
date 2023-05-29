import { Dispatch, SetStateAction, FC } from 'react'
import ISituation from '../../types/situation'
import SelectRaw from 'react-select'
import useStyles from './useStyles'
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

const Select: FC<IProps> = ({ setSituation }) => {
    const styles = useStyles()
    
    return (
        <SelectRaw defaultValue={options[0]} onChange={(newValue) => setSituation((newValue as any).value)} components={{ Control }} options={options} styles={styles}/>
    )
}

export default Select