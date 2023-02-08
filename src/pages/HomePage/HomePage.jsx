import { Link } from "react-router-dom"
import AddPage from "../AddPage/AddPage"
import './HomePage.css'

const HomePage = () => {


    return (
        <div>
            <h1>Welcome to the Cheatsheet</h1>
            <br />
            <Link className="button" to='/add'>Add</Link>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt voluptate obcaecati velit laudantium maxime, corrupti tenetur! Dolores aspernatur saepe quos atque distinctio id, ipsa velit possimus animi ex asperiores quae pariatur eos a rem vero unde voluptatibus, tempora at expedita ullam laudantium blanditiis iusto! Aut obcaecati labore accusamus vitae.</p>
        </div>
    )
}
export default HomePage