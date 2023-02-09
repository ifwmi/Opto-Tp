import React, {Component} from 'react';
import Home_b from "../image/Home-b.png";
import Img_1 from "../image/img_1.png";
import Img_2 from "../image/img_2.png";
import Header from "../components/Header_";
import Input_button from "../modal windows/Buttons/input_button";

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="home jc-sa">
                    <div className="left">
                        <div className="top color-1 uppercase mt50">
                            <h1>Сервис</h1>
                            <h3 className="mt10">для врачей
                                ортодонтов</h3>
                        </div>
                        <div className="bottom color-2 mt10">
                            <p>
                                Полуавтоматический расчет ТРГ
                            </p>
                            <p>
                                Расчет занимает менее 60 сек*
                            </p>
                            <p>
                                Нет необходимости в ручную чертить и рассчитывать углы
                            </p>
                            <p>
                                Более 50 параметров ТРГ

                            </p>
                            <p>
                                Есть анализ Kim, Tweed.

                            </p>
                            <p>
                                Есть возможность распечатать отчет ТРГ в ортодонтическую         карту (Приложение 3)
                            </p>
                        </div>
                        <p className="color-2 mt10">*зависит от опыта пользователя, качества снимка</p>
                        <div className="login">
                            <Input_button  className="uppercase mt50 background-1 color-w"/>
                            <p className="color-2 mt50 ">Зарегистрироваться</p>
                        </div>
                    </div>
                    <div className="right">
                        <img className="bg" src={Home_b} alt=""/>
                        <div className="image">
                            <img className="img_1" src={Img_1} alt=""/>
                            <img className="img_2" src={Img_2} alt=""/>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}
export default Home;