import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReadFile = ({ excelData, handleReadClick }) => {
    const [dataDisplayed, setDataDisplayed] = useState(false);

    const handleClick = () => {
        setDataDisplayed(!dataDisplayed); // Toggle dataDisplayed state
    };

    return (
        <div className="container-fluid border px-5 py-3">
            <h2 className="text-start">Click the read button to display imported data</h2>
            <button onClick={handleClick} className="btn btn-primary btn-sg px-4 mb-3">
                {dataDisplayed ? "Hide" : "Read"} {/* Change button text based on dataDisplayed state */}
            </button>
            <div className="table-responsive">
                {dataDisplayed && (
                    <table className="table table-success table-hover table-striped-columns table-condonsed">
                        <thead>
                            <tr className="fs-6 fw-light">
                                {excelData[0].map((header, index) => (
                                    <th key={index} className="fw-bold">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="fw-lighter fs-6">
                            {excelData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ReadFile;
