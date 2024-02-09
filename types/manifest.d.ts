interface IManifest {
    name: string
    scope: string
    display: string
    start_url: string
    short_name: string
    description: string
    theme_color: string
    background_color: string
    icons: { src: string, type: string, sizes: string }[]
}

export default IManifest