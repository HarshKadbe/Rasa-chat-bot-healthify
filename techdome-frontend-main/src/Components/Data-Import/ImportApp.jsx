import React from 'react';
import ImportExcel from './importExcel';
import ReadFile from './readFile';
import DataOperations from './dataOperations';
import { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom'

const ImportApp = () => {
    const [excelData, setExcelData] = useState([]);

    // Define handleReadClick to set the Excel data received from ImportExcel
    const handleReadClick = (data) => {
        setExcelData(data);
    };

    return (
        <div className="container-fluid pt-5 vh-100" style={{backgroundColor:'#b3bff570'}} >
            <div className="container pt-5">
                <ImportExcel handleReadClick={handleReadClick} />
                <ReadFile excelData={excelData} />
                <DataOperations excelData={excelData} setExcelData={setExcelData} />
            </div>   
        </div>
    );
};

export default ImportApp;