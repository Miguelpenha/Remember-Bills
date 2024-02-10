interface IIcon {
    src: string
    type: string
    sizes: string
}

interface IScreenshot {
    src: string
    type: string
    sizes: string
    form_factor: string
}

interface IManifest {
    name: string
    scope: string
    icons: IIcon[]
    display: string
    start_url: string
    short_name: string
    description: string
    theme_color: string
    background_color: string
    screenshots: IScreenshot[]
}

export default IManifest