import './App.css';
import {Routes, Route} from 'react-router-dom';


function HomePage() {
    return (
        <>
            <h1>321Go</h1>
            <h3>Personalized Health Plan</h3>
            <p>Answer a few quick questions to see your top 3 health actions and local support options.</p>
        </>
    );
}

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}>
            
            </Route>
        </Routes>
    )
}

export default App
