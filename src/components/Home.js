import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { VscSync, VscArrowRight } from "react-icons/vsc";
import { getRandomQuote } from '../utils'

const Home = () => {

    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({})


    const changeQuote = ()=>{
        setQuote(getRandomQuote(quotes))
    }

    const fetchData = async ()=>{
        const data = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes?limit=100')
        const {data: newQuotes} = await data.json()
        setQuotes(newQuotes)
        setQuote(getRandomQuote(newQuotes))
    }

    useEffect(() => {
        fetchData()
    }, [])


    if(quotes.length===0) return <div className="loading"><h1>Loading...</h1></div>
    // console.log(quotes)
    const {quoteAuthor:author, quoteText:text, quoteGenre:genre} = quote
    // console.log(quote)
    return (
        <div className="main">
            <div className="random--btn" onClick={changeQuote}><span>Random</span> <VscSync className="icon" /></div>
            <div className="container">
                <div className="quote">
                    <h4 className="quote-text">{text}</h4>
                    <Link to={`${author}`} className="quote-details">
                        <div className="quote-details__name">
                            <h5 className="quote-author">{author}</h5>
                            <h6>{genre}</h6>
                        </div>
                        <div className="quote-details__icon">
                            <VscArrowRight/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Home
