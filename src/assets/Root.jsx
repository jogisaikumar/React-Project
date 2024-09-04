import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from '../App.jsx'
import Home from './components/Home.jsx'

function Root() {
    return (
     <Router>
        <Routes>
            <Route 
            path="/"element={<App/>}
            />
            <Route path="/Home" element={<Home/>}/>
        </Routes>
     </Router>    
    )
}

export default Root;