import './index.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import parse from 'html-parse'


//actions 
import {fetchData, fetchDataCleanup} from '../../store/actions/fetchData'


const Home = () => {
    const data = useSelector(state => state.data)
    const [blogs, setBlogs] = useState(null)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchData(page))
        if (data.isSuccessful) setBlogs(data.data)
    }, [page])

    const previous = () => {
        setPage(() => (page - 1))
    }

    const next = () => {
        setPage(() => (page + 1))
    }

    return (
        <div className='home'>
            <header>
               <h1> Epower Blog </h1>
            </header>
            <div className='section container'>
                <div className='row'>
                    { blogs && blogs.map( blog => (
                        <div className='col-md-4 blog' key={blog.slug}>
                        <Link to='/slug'>
                            <img src={blog.featured_image} alt={blog.slug} />
                            <h3> { blog.title.rendered } </h3>
                            <p> { parse(blog.excerpt.rendered) } </p>
                        </Link>
                        </div>
                    ))}     
                </div>
            </div>
            <div className='pagination'>
                <button className='prev' onClick={previous}>Previous</button>
                <button className='next' onClick={next}>Next</button>
            </div>
            <footer>
                <p>Copyright &:copy {new Date().getYear()}</p>
            </footer>
        </div>
    )
}

export default Home
