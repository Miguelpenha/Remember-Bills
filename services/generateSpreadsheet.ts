import ExcelJS from 'exceljs'
import { IBill } from '../types'

function generateSpreadsheet(bills: IBill[]) {
    const spreadsheet = new ExcelJS.Workbook()
    const sheet = spreadsheet.addWorksheet('contas')

    sheet.columns = [
        { header: 'Nome', key: 'name' },
        { header: 'Dono', key: 'owner' },
        { header: 'Pago', key: 'paid', width: 12 },
        { header: 'Preço', key: 'price', width: 15 },
        { header: 'Dia de pagamento', key: 'payday', width: 18 },
        { header: 'Data de criação', key: 'created', width: 18 }
    ]

    sheet.getCell('A1').font = {
        bold: true
    }
    sheet.getCell('B1').font = {
        bold: true
    }
    sheet.getCell('C1').font = {
        bold: true
    }
    sheet.getCell('D1').font = {
        bold: true
    }
    sheet.getCell('E1').font = {
        bold: true
    }
    sheet.getCell('F1').font = {
        bold: true
    }

    bills.map(bill => {
        sheet.addRow({
            name: bill.name,
            owner: bill.owner,
            payday: bill.payday,
            price: bill.priceRaw,
            created: bill.created.date,
            paid: bill.paid ? 'Pago' : 'Não pago'
        })
    })

    return spreadsheet
}

export default generateSpreadsheet