import Logo from "../image/Logo.svg"
import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {

    constructor () {
        super();
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
                <header className="jc-sa ai-c w100">
                    <div className="left ai-c">
                        <img className="Logo" src={Logo} alt=""/>
                    </div>
                    <div className="right">
                        <div className="color-2 ai-c jc-sa">
                            <h3 className="uppercase">главная</h3>
                            <NavLink to="/" className="uppercase">главная</NavLink>
                            <h3 className="uppercase">пациенты</h3>
                            <h3 className="uppercase">обучение сайту</h3>
                            <h3 className="uppercase">профиль</h3>
                            <NavLink to="/Patients" className="uppercase">оплата</NavLink>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#0093D3"/>
                                <path d="M12.9355 8.74902L10.2285 17H8.04785L11.7461 7.04688H13.1338L12.9355 8.74902ZM15.1846 17L12.4707 8.74902L12.252 7.04688H13.6533L17.3721 17H15.1846ZM15.0615 13.2949V14.9014H9.80469V13.2949H15.0615Z" fill="white"/>
                            </svg>
                            <h3 className="color-1">Логин</h3>
                            <h3 className="color-2">выход</h3>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;