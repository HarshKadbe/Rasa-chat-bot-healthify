import React, { useState } from "react";

const DataOperations = ({ excelData, setExcelData }) => {
    const [showOperations, setShowOperations] = useState(false);
    const [formData, setFormData] = useState(
        excelData[0]?.map(() => ({ value: "" })) || []
    );

    const handleToggleOperations = () => {
        setShowOperations(!showOperations);
    };

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[index] = { ...updatedFormData[index], value };
        setFormData(updatedFormData);
    };

    const handleAddRow = () => {
        const newRowData = formData.map((field) => field.value);
        setExcelData((prevData) => {
            const updatedData = [...prevData, newRowData];
            setFormData(excelData[0]?.map(() => ({ value: "" })) || []);
            return updatedData;
        });
    };

    const handleDeleteRow = (index) => {
        const updatedData = excelData.filter((row, rowIndex) => rowIndex !== index);
        setExcelData(updatedData);
    };

    return (
        <div className="border px-5 mb-5 py-3">
            <h2>Perform Data Operations</h2>
            <button className="btn btn-primary" onClick={handleToggleOperations}>Data Operations</button>
            {showOperations && (
                <div>
                    <div className="table-responsive p-0 table-scroll">
                        <table className="table table-success table-hover table-striped-columns table-condonsed">
                            <tbody>
                                {excelData.map((row, index) => (
                                    <tr key={index} className="text-uppercase text-success">
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} >{cell}</td>
                                        ))}
                                        {index > 0 && (
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleDeleteRow(index)}>Delete</button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <h3 className="mt-5">Add New data</h3>
                    <form>
                        {excelData[0] && (
                            <div className="flex">
                                {excelData[0].map((header, index) => (
                                    <div key={index} className=" row d-inline ">
                                        {/* <label htmlFor={`column-${index}`} className="form-label">{header}</label> */}
                                        <input
                                            type="text"
                                            className="col-5 d-inline mx-5 my-2 border-dark rounded  p-1"
                                            placeholder={header}
                                            name={`column-${index}`}
                                            value={formData[index] ? formData[index].value : ""}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </form>
                    <button className="btn btn-success mb-3" onClick={handleAddRow}>Add Row</button>
                </div>
            )}
        </div>
    );
};

export default DataOperations;
