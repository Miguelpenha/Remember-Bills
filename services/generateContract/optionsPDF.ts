import { IClient } from '../../types'

function optionsPDF(client: IClient): PDFKit.PDFDocumentOptions {
    return {
        size: 'A4',
        margin: 60,
        lang: 'pt-br',
        displayTitle: true,
        info: {
            ModDate: new Date(),
            CreationDate: new Date(),
            Author: 'Alvorada comunicação',
            Creator: 'Alvorada comunicação',
            Title: `Contrato ${client.name}`,
            Producer: 'Alvorada comunicação'
        }
    }
}

export default optionsPDF