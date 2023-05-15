import { IClient } from '../../types'

function makePDF(pdf: PDFKit.PDFDocument, client: IClient) {
    pdf
    .fontSize(20)
    .moveDown(2)
    .font('Helvetica-Bold')
    .text(`CONTRATO ${client.name}`, {
        align: 'center'
    })

    return pdf
}

export default makePDF