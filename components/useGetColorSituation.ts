import ISituation from '../types/situation'
import { useTheme } from 'styled-components'

function useGetColorSituation(situation: ISituation | undefined) {
    const theme = useTheme()

    switch (situation) {
        case 'paid':
            return 'green'
        case 'waiting': 
            return 'deepskyblue'
        case 'unpaid':
            return 'red'
        case undefined: 
            return theme.primary
    }
}

export default useGetColorSituation