import React from "react";
import { read, utils } from "xlsx";

const ImportExcel = ({ handleReadClick }) => {
    
    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
            if (fileExtension === "xlsx" || fileExtension === "xls") {
                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                    const binaryString = event.target.result;
                    const workbook = read(binaryString, { type: 'binary' });
                    const wsname = workbook.SheetNames[0];
                    const ws = workbook.Sheets[wsname];
    
                    // Convert Excel sheet to JSON
                    const data = utils.sheet_to_json(ws, { header: 1 });
    
                    // Check for empty cells and replace them with "NA"
                    const dataWithNA = data.map(row => {
                        return row.map(cell => {
                            return cell === undefined || cell === null ? "NA" : cell;
                        });
                    });
    
                    // Pass the entire data array to handleReadClick
                    handleReadClick(dataWithNA);
                };
                fileReader.readAsBinaryString(selectedFile);
            } else {
                alert("Please select a valid Excel file.");
            }
        }
    };
    
    return (
        <div className="container-fluid bray border px-5 py-5"> 
            <h2 className="text-startr">Select Excel fill to imporet data</h2>
            <input type="file" accept=".xlsx, .xls" onChange={handleChange} />
        </div>
    );
};

export default ImportExcel;
