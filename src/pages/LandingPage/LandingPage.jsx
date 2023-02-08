import './LandingPage.css'
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Login from '../LoginPage/Login.jsx'

const LandingPage = () => {
    return (
        <main>
            <section>
                <h1 className='headline'>CHEATSHEET</h1>
                <h2 className='headline'>Version - 3.0</h2>
            </section>
            <Navbar />
            <Login />
            <section>
            </section>
        </main>
    )
};

export default LandingPage;