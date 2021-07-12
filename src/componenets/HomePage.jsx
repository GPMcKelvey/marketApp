import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/MainFarmers">Farmers</Link>
            <p></p>
            <Link to="/MainForums">Forums</Link>
        </div>
    )
}

export default HomePage;
