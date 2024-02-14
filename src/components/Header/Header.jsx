import React, { useState } from "react";
import "./Header.css"

function Header({ value, onChange }) {


    return (
        <div className="container-header">
            <div className="label-header">
                Filter:
            </div>
            <select value={value} onChange={onChange} className="select-header">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}

export default Header;
