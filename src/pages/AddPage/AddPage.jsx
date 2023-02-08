import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useFetch } from '../../hooks/useFetch';
import './AddPage.css';

const AddPage = () => {


    const navigate = useNavigate();

    const { postData, data } = useFetch("http://localhost:9095/api/topic", "POST");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        postData(form);


    };

    useEffect(() => {
        if (data) {
            navigate('/home');
        }
    }, [data]);

    return (
        <>
            <h1 className='page-title' >Add a new Topic</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    <h2>Topic</h2>
                    <input
                        type="text"
                        name="topic"
                        required
                    />
                </label>
                <label>
                    <h2>Author</h2>
                    <input
                        name="author"
                        required
                    />
                </label>
                <h3>Picture</h3>
                <input
                    type="file"
                    name="image"

                />
                <label>
                    <h2>Text</h2>
                    <textarea
                        name="text"
                        required
                    />
                </label>
                <button className='btn' >post</button>
            </form>
        </>
    );
};

export default AddPage;