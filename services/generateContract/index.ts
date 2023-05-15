import { IClient } from '../../types'
import type { NextApiResponse } from 'next'
import PDFKit from 'pdfkit'
import optionsPDF from './optionsPDF'
import makePDF from './makePDF'

function generateContract(client: IClient, res: NextApiResponse) {
    const pdf = new PDFKit(optionsPDF(client))
    const document = makePDF(pdf, client)

    document.pipe(res)

    document.end()

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-disposition', `attachment; filename=Contrato ${client.name}.pdf`)
}

export default generateContract