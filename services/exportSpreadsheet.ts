import type { NextApiResponse } from 'next'
import type { Workbook } from 'exceljs'

async function exportSpreadsheet(res: NextApiResponse, spreadsheet: Workbook) {
    res.setHeader('Content-Description', 'File Transfer')
    res.setHeader('Content-Disposition', 'attachment; filename=contas.xlsx')
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Transfer-Encoding', 'binary')
    res.setHeader('Cache-Control', 'must-revalidate')
    res.setHeader('Pragma', 'public')

    await spreadsheet.xlsx.write(res)
}

export default exportSpreadsheet