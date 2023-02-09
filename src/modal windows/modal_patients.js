import React from "react";
import ReactModal from 'react-modal'
class Modal_patients extends React.Component {
    constructor () {
        super();
        this.state = {
            FULL_NAME: "",
            Age: "",
            Bite: "",
            Clinic: "Clinic",
            Start_date: "",
            Stage_of_treatment: "",
            Date_the_card_was_created: "",
            Date_of_last_visit: "",
            showSubmit: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
        handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            if (
                this.state.FULL_NAME !== "" &&
                this.state.Age !== "" &&
                this.state.Bite !== "" &&
                this.state.Clinic !== "Clinic" &&
                this.state.Start_date !== "" &&
                this.state.Stage_of_treatment !== "" &&
                this.state.Date_the_card_was_created !== "" &&
                this.state.Date_of_last_visit !== ""
            ) {
                this.setState({ showSubmit: true });
            } else {
                this.setState({ showSubmit: false });
            }
        });
    };
    handleCloseModal () {
        this.setState({ showModal: false, buttonColor: 'white', Color:'black' });
    }

        handleSubmit = event => {
        event.preventDefault();
        const {
            FULL_NAME,
            Age,
            Bite,
            Clinic,
            Start_date,
            Stage_of_treatment,
            Date_the_card_was_created,
            Date_of_last_visit
        } = this.state;
        fetch("http://localhost:3000/All", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                FULL_NAME,
                Age,
                Bite,
                Clinic,
                Start_date,
                Stage_of_treatment,
                Date_the_card_was_created,
                Date_of_last_visit
            })
        });
        this.handleCloseModal()
    };
    handleOpenModal () {
        this.setState({ showModal: true, buttonColor: '#0093D3FF',Color: 'white' });
    }

    render () {
        return (
            <div className="button">
                <button
                    className="uppercase hover"
                    onClick={this.handleOpenModal}
                    style={ {backgroundColor: this.state.buttonColor,color: this.state.Color}}
                >
                    + добавить пациента
                </button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="Modal Modal1"
                    overlayClassName="Overlay Overlay1"
                >
                    <form className="modal_patients ai-c flex-d_c" onSubmit={this.handleSubmit}>
                        <input
                                            type="text"
                                            name="FULL_NAME"
                                            value={this.state.FULL_NAME}
                                            onChange={this.handleChange}
                                            placeholder="FULL_NAME"
                                        />
                                        <input
                                            type="number"
                                            name="Age"
                                            value={this.state.Age}
                                            onChange={this.handleChange}
                                            placeholder="Age"
                                        />
                                        <input
                                            type="text"
                                            name="Bite"
                                            value={this.state.Bite}
                                            onChange={this.handleChange}
                                            placeholder="Bite"
                                        />
                                        <input
                                            type="text"
                                            name="Start_date"
                                            value={this.state.Start_date}
                                            onChange={this.handleChange}
                                            placeholder="Start_date"
                                        />
                                        <input
                                            type="text"
                                            name="Stage_of_treatment"
                                            value={this.state.Stage_of_treatment}
                                            onChange={this.handleChange}
                                            placeholder="Stage_of_treatment"
                                        />
                                        <input
                                            type="text"
                                            name="Date_the_card_was_created"
                                            value={this.state.Date_the_card_was_created}
                                            onChange={this.handleChange}
                                            placeholder="Date_the_card_was_created"
                                        />
                                        <input
                                            type="text"
                                            name="Date_of_last_visit"
                                            value={this.state.Date_of_last_visit}
                                            onChange={this.handleChange}
                                            placeholder="Date_of_last_visit"
                                        />
                        <select
                            name="Clinic"
                            value={this.state.Clinic}
                            onChange={this.handleChange}
                        >
                            <option>Clinic</option>
                            <option>Clinic1</option>
                        </select>
                                    </form>
                    {this.state.showSubmit && (
                        <div className="button">
                            <button onClick={this.handleSubmit} className="uppercase background-1 color-w">добавить пациента</button>
                        </div>
                    )}

                    <svg  className="X" onClick={this.handleCloseModal} style={{backgroundColor: 'white'}} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5L10.5 10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 0.5L0.5 10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </ReactModal>
            </div>
        );
    }
}
export default Modal_patients