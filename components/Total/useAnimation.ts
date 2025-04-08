import { useTheme } from 'styled-components'
import { useEffect } from 'react'
import gsap from 'gsap'

function useAnimation(percentPaid: number | undefined) {
    const theme = useTheme()

    useEffect(() => {
        if (percentPaid) {
            gsap.to('#total', {
                boxShadow: `${theme.primary} 0px 2px 8px 1px`
            })

            gsap.to('#total>.paid', {
                width: `${percentPaid}%`,
                backgroundColor: theme.primary
            })

            gsap.to('#total>.total', {
                width: `${100-percentPaid}%`,
                backgroundColor: theme.secondary
            })
        }
    }, [percentPaid])
}

export default useAnimation