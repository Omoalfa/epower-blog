import './index.css'
import React from 'react'
import { useParam } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-parse'

const Post = () => {
    const slug = useParam()
    const data = useSelector(s => s.data)
    const blog = data.data.filter(blog => blog.slug === slug)

    return (
        <div>
            <header>
                <h1> { blog[0].title } </h1>
                <p> Published on { blog[0].post_date }</p>
            </header>
            <div className='container'>
                <p>
                 { parse(blog[0].content.rendered) }
                </p>
            </div>
        </div>
    )
}

export default Post
