import { Routes,Route } from 'react-router-dom';
import Main from "../components/Main";
import Patients from "../pages/Patients";
const Routers = function() {
    return (
            <Routes>
                <Route exact path="/" component={<Main/>} />
                <Route path="/Patients" component={<Patients/>} />
            </Routes>
    );
};
export default Routers