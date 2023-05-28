import { Dispatch, SetStateAction, FC } from 'react'
import useStyle from './useStyle'
import ModalRaw from 'react-modal'

interface IProps {
    open: boolean
    children: any
    width?: string
    height?: string
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IProps> = ({ width, height, open, setOpen, children }) => {
    const style = useStyle(width, height)

    return (
        <ModalRaw ariaHideApp={false} style={style} isOpen={open} onRequestClose={() => setOpen(false)}>
            {children}
        </ModalRaw>
    )
}

export default Modal