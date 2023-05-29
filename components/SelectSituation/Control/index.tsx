import { FC } from 'react'
import { ControlProps, components } from 'react-select'
import Situation from './Situation'

const Control: FC<ControlProps> = ({ children, ...props }) => {
    return (
        <components.Control {...props}>
            <Situation situation={props.getValue()[0] ? (props.getValue()[0] as any).value : undefined}/>
            {children}
        </components.Control>
    )
}

export default Control