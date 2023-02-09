import React, {Component} from 'react';
import Modal_patients from "../modal windows/modal_patients.js";
import Modal_All from "../modal windows/Modal_all_patients";
class Patients extends Component {
    render() {
        return (
            <div>
                <div className="breadcrumbs d-f">
                    <h4 className="background-1">Главная/Пациенты</h4>
                </div>
                <div className="patients">
                    <div className="left jc-sb mt50">
                        <div className="ai-c flex-d_c">
                            <svg viewBox="0 0 83 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28.0001" cy="20.3333" r="17.3333" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M53.1141 74.2707C51.6327 68.7422 48.3686 63.8571 43.8278 60.3728C39.2871 56.8886 33.7235 55 28 55C22.2765 55 16.713 56.8886 12.1722 60.3728C7.63146 63.857 4.36728 68.7422 2.88593 74.2707" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M67 29L67 55" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M80 42L54 42" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                            </svg>
                            <div className="button">
                                <Modal_patients/>
                            </div>
                        </div>
                        <div className="ai-c flex-d_c">
                            <svg viewBox="0 0 99 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28.0001" cy="33.3333" r="17.3333" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                                <circle cx="71.3333" cy="20.3333" r="17.3333" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M53.1141 87.2707C51.6327 81.7422 48.3686 76.8571 43.8278 73.3728C39.2871 69.8886 33.7235 68 28 68C22.2765 68 16.713 69.8886 12.1722 73.3728C7.63146 76.857 4.36728 81.7422 2.88593 87.2707" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M96.4473 74.2707C94.966 68.7422 91.7018 63.8571 87.1611 60.3728C82.6203 56.8886 77.0567 55 71.3333 55C65.6098 55 60.0462 56.8886 55.5055 60.3728C50.9647 63.857 47.7005 68.7422 46.2192 74.2707" stroke="#0093D3" stroke-width="5" stroke-linecap="round"/>
                            </svg>
                            <div className="button color-w uppercase">
                                <Modal_All/>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <svg viewBox="0 0 76 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.0864 1.77206C36.1362 0.051484 39.8638 0.0514803 42.9136 1.77205L56.7265 9.56475L70.3816 17.6307C73.3966 19.4116 75.2604 22.6398 75.2952 26.1413L75.453 42L75.2952 57.8587C75.2604 61.3602 73.3966 64.5884 70.3816 66.3693L56.7265 74.4352L42.9136 82.2279C39.8638 83.9485 36.1362 83.9485 33.0864 82.2279L19.2735 74.4352L5.61838 66.3693C2.60342 64.5884 0.739617 61.3602 0.70478 57.8587L0.547001 42L0.70478 26.1413C0.739617 22.6398 2.60341 19.4116 5.61837 17.6307L19.2735 9.56475L33.0864 1.77206Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    <div className="box2">
                        <svg viewBox="0 0 410 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236.086 1.77205C239.136 0.0514783 242.864 0.0514808 245.914 1.77206L361.198 66.811L475.166 134.131C478.181 135.912 480.044 139.14 480.079 142.641L481.396 275L480.079 407.359C480.044 410.86 478.181 414.088 475.166 415.869L361.198 483.189L245.914 548.228C242.864 549.949 239.136 549.949 236.086 548.228L120.802 483.189L6.83445 415.869C3.81949 414.088 1.9557 410.86 1.92086 407.359L0.604004 275L1.92086 142.641C1.9557 139.14 3.8195 135.912 6.83446 134.131L120.802 66.811L236.086 1.77205Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patients;