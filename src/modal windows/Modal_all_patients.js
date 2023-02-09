import React from "react";
import ReactModal from 'react-modal'
class Modal_All extends React.Component {
    state = {
        data: []
    };

    constructor () {
        super();
        this.state = {
            showModal: false,
            buttonColor: 'white',
            Color: 'black',
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        fetch('http://localhost:3000/All')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.error(error));
    };
    handleOpenModal () {
        this.setState({ showModal: true, buttonColor: '#0093D3FF',Color: 'white' });
    }
    handleCloseModal () {
        this.setState({ showModal: false, buttonColor: 'white', Color:'black' });
    }
    render () {
        const { data } = this.state;
        return (
            <div className="button">
                <button
                    className="uppercase"
                    onClick={this.handleOpenModal}
                    style={ {backgroundColor: this.state.buttonColor,color: this.state.Color}}
                >
                    + добавить пациента
                </button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="Modal Modal1 Modal2"
                    overlayClassName="Overlay Overlay1 Overlay2"
                >
                    <div className="modal_patients">
                        <div>
                            <div className="ai-c">
                                <select className="ai-c">
                                    <option>Сортировать по</option>
                                    <option>Клиника</option>
                                </select>
                                <button className="ai-c delete">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 15L10 12" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M14 15L14 12" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    <h4 className="color-2">Удалить</h4>
                                </button>

                            </div>
                            <div>
                                <div className="jc-sb">
                                    <div className="box">
                                        <h3 className="color-2 h3_1">Ф.И.О.</h3>
                                    </div>
                                    <div className="box">
                                        <h3 className="color-2">Возраст</h3>
                                    </div>
                                    <div className="box">
                                        <h4 className="color-2">Прикус</h4>
                                    </div>
                                    <div className="box">
                                        <h4 className="color-2">Клиника</h4>
                                    </div>
                                    <div className="box">
                                        <h4 className="color-2">Дата начало работы</h4>
                                    </div>
                                    <div className="box">
                                        <h4 className="color-2">Этап лечения</h4>
                                    </div>
                                    <div className="box">
                                        <h4 className="color-2">Дата создание карты</h4>
                                    </div>
                                    <div className="box">
                                        <h4 className="color-2">Дата последнего визита</h4>
                                    </div>
                                </div>

                                <div className="blocks">
                                                {data ? (
                                                    data.map(item => (
                                                        <div key={item.id} className="block ai-c">
                                                            <div>
                                                                {
                                                                    item ?(
                                                                        <div className="ai-c jc-sb color-2">
                                                                         <img src={item.Image} alt=""/>
                                                                        <h3>{item.FULL_NAME}</h3>
                                                                        <h4>{item.Age}</h4>
                                                                        <h4>{item.Bite}</h4>
                                                                        <h4>{item.Clinic}</h4>
                                                                        <h4>{item.Start_date}</h4>
                                                                        <h4>{item.Stage_of_treatment}</h4>
                                                                        <h4>{item.Date_the_card_was_created}</h4>
                                                                        <h4>{item.Date_of_last_visit}</h4>
                                                                    </div> ):<p className="color-1">loading..</p>
                                                                }
                                                            </div>
                                                        </div>

                                                    ))
                                                ) : (
                                                    <p className="color-1">loading...</p>
                                                )}
                                </div>
                            </div>
                            </div>
                    </div>
                    <svg  className="X" onClick={this.handleCloseModal} style={{backgroundColor: 'white'}} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5L10.5 10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 0.5L0.5 10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </ReactModal>
            </div>
        );
    }
}
export default Modal_All