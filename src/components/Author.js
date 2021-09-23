import React, {useEffect, useState, useRef} from 'react'
import { useHistory } from 'react-router';
import { VscSync } from "react-icons/vsc";

const Author = () => {
    const history = useHistory();
    const author = history.location.pathname.split("/")[1];
    const [allQuotes, setAllQuotes] = useState([])
    const fetchData = useRef(null)

    fetchData.current = async ()=>{
        const data = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes?author='+author)
        const {data: newQuotes} = await data.json()
        console.log(newQuotes)
        setAllQuotes(newQuotes)
    }

    const changeQuote = ()=>{
        history.push("/")
    }

    useEffect(() => {
        fetchData.current()
    }, [])

    if(allQuotes.length===0) return <div className="loading"><h1>Loading...</h1></div>

    return (
        <div  className="main">
             <div className="random--btn" onClick={changeQuote}><span>Random</span> <VscSync className="icon" /></div>
            <div className="container wrapper">
                <h1 className="author-text">{author}</h1>
                {allQuotes.map((quote,index)=>{
                    const {id, quoteText} = quote
                    return(
                        <div className="quote" key={`${id}-${index}`}>
                            <div className="quote-text">{quoteText}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Author
