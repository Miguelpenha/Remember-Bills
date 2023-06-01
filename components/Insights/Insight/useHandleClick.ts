import { toast } from 'react-toastify'

function useHandleClick(value: string) {
    async function handleClick() {
        await navigator.clipboard.writeText(value)

        toast('Valor copiado', {
            type: 'info'
        })
    }

    return handleClick
}

export default useHandleClick