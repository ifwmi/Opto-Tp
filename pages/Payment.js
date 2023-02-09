import React, {Component} from 'react';

class Payment extends Component {
    render() {
        return (
            <div>
                <div className="Payment">
                    <h1 className="color-1 uppercase">оплата</h1>
                    <div className="jc-sb mt100">
                        <div className="box box_1 ai-c flex-d_c">
                            <div className="top ml10">
                                <div className="jc-c">
                                    <h3 className="mt50">45 <span className="span1">дней</span></h3>
                                </div>
                            </div>
                            <h4 className="center ml10 uppercase">бесплатно</h4>
                            <div className="mt50 button">
                                <button className="color-1 ai-c ml10  uppercase">выбрать план</button>
                            </div>
                        </div>
                        <div className="box box_2 ai-c flex-d_c">
                            <div className="top ml10">
                                <div className="ai-c flex-d_c">
                                    <h4 className="mt50">популярный</h4>
                                    <h3 className="mm uppercase">6 <span className="span2">месяцев <br/><b>+ 2 в подарок</b></span></h3>
                                </div>
                            </div>
                            <h3 className="center ml10 uppercase">3600 ₽</h3>
                            <div className="button">
                                <button className="color-1 ai-c ml10  uppercase">выбрать план</button>
                            </div>
                        </div>
                        <div className="box box_1 ai-c flex-d_c">
                            <div className="top ml10">
                                <div className="mt50 jc-c mm">
                                    <h3 className="mm  uppercase"> 12 <span className="span1 ml10">месяцев <br/> +<b>6</b> в подарок</span></h3>
                                </div>
                            </div>
                            <h3 className="center ml10_1 uppercase">1800 ₽</h3>
                            <div className="button mt30">
                                <button className="color-1 ai-c ml10  uppercase">выбрать план</button>
                            </div>
                        </div>
                        <div className="box box_2 ai-c flex-d_c">
                            <div className="top ml10">
                                <div className="ai-c flex-d_c">
                                    <h4 className="mt50">эксклюзивный</h4>
                                    <h3 className="mm uppercase ">12 <span className="span2">месяцев <br/><b>бесплатно</b></span></h3>
                                </div>
                            </div>
                            <h6 className="center mtb10 uppercase ">только для руководителей бюджетных организаций</h6>
                            <div className="button">
                                <button className="color-1 ai-c ml10  uppercase">выбрать план</button>
                            </div>
                        </div>

                    </div>
                    <div className="box1">
                        <svg viewBox="0 0 76 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.0864 1.77206C36.1362 0.051484 39.8638 0.0514803 42.9136 1.77205L56.7265 9.56475L70.3816 17.6307C73.3966 19.4116 75.2604 22.6398 75.2952 26.1413L75.453 42L75.2952 57.8587C75.2604 61.3602 73.3966 64.5884 70.3816 66.3693L56.7265 74.4352L42.9136 82.2279C39.8638 83.9485 36.1362 83.9485 33.0864 82.2279L19.2735 74.4352L5.61838 66.3693C2.60342 64.5884 0.739617 61.3602 0.70478 57.8587L0.547001 42L0.70478 26.1413C0.739617 22.6398 2.60341 19.4116 5.61837 17.6307L19.2735 9.56475L33.0864 1.77206Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    <div className="box2">
                        <svg width="410" height="550" viewBox="0 0 410 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236.086 1.77205C239.136 0.0514783 242.864 0.0514808 245.914 1.77206L361.198 66.811L475.166 134.131C478.18 135.912 480.044 139.14 480.079 142.641L481.396 275L480.079 407.359C480.044 410.86 478.18 414.088 475.166 415.869L361.198 483.189L245.914 548.228C242.864 549.949 239.136 549.949 236.086 548.228L120.802 483.189L6.83445 415.869C3.81949 414.088 1.9557 410.86 1.92086 407.359L0.604004 275L1.92086 142.641C1.9557 139.14 3.8195 135.912 6.83446 134.131L120.802 66.811L236.086 1.77205Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;