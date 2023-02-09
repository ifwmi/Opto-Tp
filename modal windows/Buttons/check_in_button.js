import React from "react";
import ReactModal from 'react-modal'
import Home_b from "../../image/Home-b.png";
class Check_in_button extends React.Component {
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
            <div className="buttons">
                <button className="color-2 uppercase" onClick={this.handleOpenModal}>регистрация</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="Modal"
                    overlayClassName="Overlay"
                    onRequestClose={this.handleCloseModal}
                >
                    <div className='check_in_button'>
                        <div className="ai-c flex-d_c">
                            <h2 className="color-1">РЕГИСТРАЦИЯ</h2>
                            <input placeholder="Логин" type="text"/>
                            <input placeholder="Пароль" type="text"/>
                            <input placeholder="Повторите пароль" type="text"/>
                            <input placeholder="Ф.И.О. Доктора" type="text"/>
                            <input placeholder="Специальность" type="text"/>
                            <img className="bg" src={Home_b} alt=""/>
                        </div>
                        <button className="REGISTER uppercase color-w background-1">зарегистрироваться</button>
                        <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5864 1.77206C18.6362 0.0514823 22.3638 0.0514801 25.4136 1.77205L30.2988 4.52807L35.1281 7.38073C38.1431 9.16164 40.0069 12.3898 40.0417 15.8913L40.0975 21.5L40.0417 27.1087C40.0069 30.6102 38.1431 33.8384 35.1281 35.6193L30.2988 38.4719L25.4136 41.2279C22.3638 42.9485 18.6362 42.9485 15.5864 41.2279L10.7013 38.4719L5.8719 35.6193C2.85694 33.8384 0.993139 30.6102 0.958302 27.1087L0.9025 21.5L0.958302 15.8913C0.993139 12.3898 2.85694 9.16164 5.8719 7.38073L10.7013 4.52807L15.5864 1.77206Z" fill="#0093D3"/>
                        </svg>
                    </div>
                        <svg className="X" onClick={this.handleCloseModal} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 0.5L10.5 10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.5 0.5L0.5 10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ReactModal>
            </div>
        );
    }
}
export default Check_in_button