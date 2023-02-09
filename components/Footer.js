import React, {Component} from 'react';
import Logo from "../image/Logo.svg";
import { slide as Menu } from 'react-burger-menu'
import Input_button from "../modal windows/Buttons/input_button";
import Check_in_button from "../modal windows/Buttons/check_in_button";
class Footer extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <footer className="background-1 w100 ai-c jc-sa">
                <div className="N_left">
                    <img className="Logo" src={Logo} alt=""/>
                </div>
                <div className="N_center">
                    <p>Политика конфиденциальности© 2022 Все права защищены</p>
                </div>
                <div id="outer-container" className="N_center jc-c">
                    <Menu className="background-1 uppercase left_11">
                        <h3 className="text-center">главная</h3>
                        <h3 className="text-center">пациенты</h3>
                        <h3 className="text-center">обучение сайту</h3>
                        <h3 className="text-center">расчет снимка</h3>
                        <h3 className="text-center">профиль</h3>
                        <h3 className="text-center">оплата</h3>
                        <div className="jc-c buttons">
                                <Input_button/>
                                <h3>/</h3>
                                <Check_in_button/>
                        </div>
                    </Menu>
                    <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="5" fill="white"/>
                        <rect y="10" width="50" height="5" fill="white"/>
                        <rect y="20" width="50" height="5" fill="white"/>
                    </svg>
                </div>
            </footer>
        )
    }
}
export default Footer;