import React from "react";
import ReactModal from 'react-modal'
import {File_Uploader} from "../FileUploader/file_uploader";
class FileUploader extends React.Component {
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
                <button className="color-2 uppercase" onClick={this.handleOpenModal}>нет данных</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="Modal3 jc-c ai-c"
                    overlayClassName="Overlay"
                    onRequestClose={this.handleCloseModal}
                >
                    <div className='check_in_button'>
                        <File_Uploader/>
                    </div>
                </ReactModal>
            </div>
        );
    }
}
export default FileUploader