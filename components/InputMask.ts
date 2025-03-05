import dynamic from 'next/dynamic'
import { memo } from 'react'

const InputMask = dynamic(() => import('@mona-health/react-input-mask'), { ssr: false })

export default memo(InputMask) as any