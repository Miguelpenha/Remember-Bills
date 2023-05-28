import ModalRaw from 'react-modal'
import { useTheme } from 'styled-components'

function useStyle(width?: string, height?: string): ModalRaw.Styles {
    const theme = useTheme()

    return {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            padding: '2em',
            border: 'none',
            margin: 'auto',
            display: 'flex',
            minWidth: '15em',
            width: width || '50vw',
            flexDirection: 'column',
            height: height || '45vh',
            backgroundColor: theme.secondary,
            boxShadow: `${theme.primary} 0px 1px 12px 4px`
        }
    }
}

export default useStyle