import IManifest from '../types/manifest'
import theme from '../styles/theme'

const manifest: IManifest = {
    scope: '/',
    start_url: '/',
    display: 'standalone',
    name: 'Remember Bills',
    theme_color: theme.primary,
    short_name: 'Remember Bills',
    description: 'Remember Bills',
    background_color: theme.backgroundColor,
    icons: [
        {
            sizes: '57x57',
            type: 'image/png',
            src: '/img/apple-touch-icon.png'
        },
        {
            sizes: '512x512',
            type: 'image/png',
            src: '/img/favicon-mobile.png'
        }
    ],
    screenshots: [
        {
            type: 'image/png',
            sizes: '1200x628',
            form_factor: 'wide',
            src: '/img/screenshot-1.png'
        },
        {
            type: 'image/jpg',
            sizes: '628x1200',
            form_factor: 'narrow',
            src: '/img/screenshot-2.png'
        }
    ]
}

export default manifest