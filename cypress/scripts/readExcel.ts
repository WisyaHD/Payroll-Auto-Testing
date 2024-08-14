const fs = require('fs');
const path = require('path')
const XLSX = require('xlsx');

export const readExcel = (pathToExcel: string) => {
    return new Promise((resolve: any) => {
        const resolvedPath = path.resolve(pathToExcel);
        let dataBuffer = fs.readFileSync(resolvedPath);
        var workBook = XLSX.readFile(dataBuffer);
        var xlData = XLSX.utils.sheet_to_json(workBook.Sheets['sheet 1[0]']);
        resolve(xlData);
    })
}