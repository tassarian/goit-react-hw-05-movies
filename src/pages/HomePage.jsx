const { useState, useEffect } = require("react")
const { Link, useLocation } = require("react-router-dom")
const { getTrendingMovies } = require("services/services")


const HomePage = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation()

    useEffect(() => {
        getTrendingMovies().then(setMovies)
    }, [])

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {movies.map(({ title, id }) => (
                    <li key={id} >
                        <Link to={`movies/${id}`} state={{from: location}} >{ title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HomePage