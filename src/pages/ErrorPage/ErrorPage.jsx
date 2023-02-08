import './ErrorPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <body>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-10 col-sm-offset-1 text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center">404</h1>
                                    <div className="contant_box_404">
                                        <h3 className="h2">Looks like you're lost</h3>
                                        <p>the page your are looking for not is avaible!</p>
                                        <Link to='/'><button className='link_404'>Home</button></Link>
                                    </div>
                                    <div className="gif"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </body>
    )
}

export default ErrorPage;