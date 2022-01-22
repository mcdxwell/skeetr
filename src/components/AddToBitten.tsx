import React, { useState } from "react";
import {IState as Props}  from "../App"


interface IProps {
    setUserBites: React.Dispatch<React.SetStateAction<Props["user"]>>
    user: Props["user"]
}

const AddToBitten: React.FC<IProps> = ({user, setUserBites}) => {

    const [input, setInput] = useState({
        name: "",
        weight: "",
        height: "",
        sex: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.weight || !input.height || !input.sex) return

        setUserBites([
            ...user,
            {
                name: input.name,
                weight: parseInt(input.weight),
                height: parseInt(input.height),
                sex: input.sex,
            }
        ]);

        setInput({
            name: "",
            weight: "",
            height: "",
            sex: ""
        })
    }

    return (
        <div className="AddToBitten">
            <input
                type="text"
                placeholder="Name"
                className="AddToBitten-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="int"
                placeholder="Weight"
                className="AddToBitten-input"
                value={input.weight}
                onChange={handleChange}
                name="weight"
            />
            <input
                type="text"
                placeholder="Height"
                className="AddToBitten-input"
                value={input.height}
                onChange={handleChange}
                name="height"
            />

            
            <p><input type="radio" value={input.sex} onChange={handleChange} name="sex" />Male
            <input type="radio" value={input.sex} onChange={handleChange} name="sex" />Female
            </p>
            <button
                onClick={handleClick}
                className="AddToBitten-btn"
            >
                Calculate
            </button>
        </div>
    )
}

export default AddToBitten