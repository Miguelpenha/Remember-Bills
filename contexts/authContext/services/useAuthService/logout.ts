import { Dispatch, SetStateAction } from 'react'
import { destroyCookie } from 'nookies'

function logout(setValue: Dispatch<SetStateAction<boolean>>) {
    setValue(false)

    destroyCookie(undefined, process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME, {
        domain: process.env.NEXT_PUBLIC_DOMAIN
    })
}

export default logout