import React from "react";
import {IState as Props}  from "../App"
import AddToBitten from '../components/AddToBitten';
interface IProps {
    user: Props["user"]
}
const Bitten: React.FC<IProps> = ({ user }) => {

    const renderBitten = (): JSX.Element[] => {
        return user.map((user) => {
            return (
                <li className="Bitten">
                <p>It would take you {user.bites} mosquito bites for you to perish!</p>
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
