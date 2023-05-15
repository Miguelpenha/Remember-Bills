import nookies from 'nookies'
import { jwtVerify } from 'jose'

async function getServerSidePropsAuth(ctx: any) {
    const { [process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME]:isLogged } = nookies.get(ctx)

    try {
        if (await jwtVerify(isLogged, new TextEncoder().encode(process.env.SECRET_JWT))) {
            return {
                props: {  }
            }
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: '/login'
                }
            }
        }
    } catch {
        return {
            redirect: {
                permanent: false,
                destination: '/login'
            }
        }
    }
}

export default getServerSidePropsAuth