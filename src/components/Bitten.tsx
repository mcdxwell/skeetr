import React from "react";
import {IState as Props}  from "../App"

interface IProps {
    user: Props["user"]
}

const Bitten: React.FC<IProps> = ({ user }) => {

    const renderBitten = (): JSX.Element[] => {
        return user.map((user) => {
            return (
                <li className="Bitten">
                <div className="Bitten-header">
                    <h2>{user.name}</h2>
                </div>
                <p>{user.weight}</p>
                <p>{user.height}</p>
               
                <p>{user.bites}</p>
            </li>
            )
        })
    }
    return (
        <ul>
            {renderBitten()}
        </ul>
    )
}

export default Bitten
