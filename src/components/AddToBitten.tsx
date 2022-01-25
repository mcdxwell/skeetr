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
        sex: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const [selectedSex, setSelectedSex] = React.useState('');
    const [selectedUnits, setSelectedUnits] = React.useState('');

    const isSexSelected = (value: string): boolean => {
        input.sex = selectedSex
        return selectedSex === value;
    }

    const isUnitsSelected = (value: string): boolean => {
        return selectedUnits === value
    }

    const handleUnits = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedUnits(e.currentTarget.value)
    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedSex(e.currentTarget.value)

    const handleClick = (): void => {
        if(!input.weight || !input.height) return

        setUserBites([
            ...user,
            {
                name: input.name,
                height: parseInt(input.height),
                weight: parseInt(input.weight),
                sex: input.sex,
                bites: calcBites(selectedUnits, input.sex, parseFloat(input.height), parseFloat(input.weight))
            }
        ]);

        setInput({
            name: "",
            height: "",
            weight: "",
            sex: "",
        })
    }

    const convHeight = (height: number): number => height * 2.54 // inches to centimeters
    const convWeight = (weight: number): number => weight * 0.45359237 // lbs. to Kgs.

    function calcBites(units: string, sex: string, height: number, weight: number) {
        const bloodSucked = 0.000005
        let hw: number[];
        if (units === 'Customary') {
            hw = [convHeight(height), convWeight(weight)]
        } else {
            hw = [height, weight]
        }
        if (sex === 'Male') {
            return Math.round((((0.3369 * (hw[0]/100)**3 + 0.03219 * hw[1] + 0.6041) * 0.4) / bloodSucked))
        } else {
            return Math.round((((0.3561 * (hw[0]/100)**3 + 0.03308 * hw[1] + 0.1833) * 0.4) / bloodSucked))
        }
    }
    

    return (
        <div className="AddToBitten">

        <div>
            <p>Units</p>
            <input 
                type="radio"
                name="units-button"
                value="Metric"
                checked={isUnitsSelected('Metric')}
                onChange={handleUnits}
            /> Metric (cm-kgs)

            <input 
                type="radio"
                name="units-button"
                value="Customary"
                checked={isUnitsSelected('Customary')}
                onChange={handleUnits}
            /> Customary (in-lbs)
        </div>
            <input
                type="text"
                placeholder="Height*"
                className="AddToBitten-input"
                value={input.height}
                onChange={handleChange}
                name="height"
            />

            <input
                type="int"
                placeholder="Weight*"
                className="AddToBitten-input"
                value={input.weight}
                onChange={handleChange}
                name="weight"
            />
            
            <div>
            <p>Sex</p>
            <input
                type="radio"
                name="sex-button"
                value="Male"
                checked={isSexSelected('Male')}
                onChange={handleRadioClick}
            /> Male

            <input
                type="radio"
                name="sex-button"
                value="Female"
                checked={isSexSelected('Female')}
                onChange={handleRadioClick}
            /> Female

</div>

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