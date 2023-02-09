import React from "react";
import Input_button from "../modal windows/Buttons/input_button";
import Check_in_button from "../modal windows/Buttons/check_in_button";
import Logo from "../image/Logo.svg"
import {Link} from "react-router-dom";
class HeaderApp extends React.Component {
    constructor () {
        super   ();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }
    render () {
        return (

            <>
                <header className="jc-sa ai-c uppercase w100">
                    <div className="left">
                        <img className="Logo" src={Logo} alt=""/>
                    </div>
                    <div className="right jc-sb color-2">
                        <h3>главная</h3>
                        <Link to="/">главная</Link>
                        <h3>пациенты</h3>
                        <h3>обучение сайту</h3>
                        <h3>профиль</h3>
                        <Link to="/Patients">оплата</Link>
                        <div className="d-f buttons">
                            <Input_button className="color-2"/>
                            <h3>/</h3>
                            <Check_in_button className="color-2"/>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default HeaderApp;