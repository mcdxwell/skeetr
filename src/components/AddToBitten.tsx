import React from "react";

const AddToBitten = () => {
    return (
        <div className="AddToBitten">
            <input
                type="text"
                placeholder="Name"
                className="AddToBitten-input"
            />
            <input
                type="int"
                placeholder="Weight"
                className="AddToBitten-input"
            />
            <input
                type="text"
                placeholder="Height"
                className="AddToBitten-input"
            />

            <div>
            <input type="radio" value="Male" name="sex" /> Male
            <input type="radio" value="Female" name="sex" /> Female
            </div>
        </div>
    )
}

export default AddToBitten