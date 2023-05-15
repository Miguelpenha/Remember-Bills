declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SECRET_JWT: string
        AUTHORIZED_EMAILS: string
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
        NEXT_PUBLIC_LOGIN_COOKIE_NAME: string
      }
    }
}

export {}