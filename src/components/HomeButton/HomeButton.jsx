import { Link } from "react-router-dom";
import '../../App.css'

const HomeButton = () => {
    return (
        <>
            <Link className="button" to='/home'>Home</Link>
        </>
    )
}

export default HomeButton;