import React from "react"
import { Heart } from "react-feather";

const QuoteCard = ({quote, addToFavorites, favoriteQuotes}) => {
    const quoteIsFavorite = favoriteQuotes.find((favorite) => favorite.id === quote.id)
    const faveStyle = quoteIsFavorite ? "#333" : "";

    return (
        <article className="quote-card">
            <div>
                <p className="categories">{quote.categories.map((category) => (<span key={category} className="category">{category}</span>))}</p>
                <h3>{quote.text}</h3>
            </div>
            <footer>
                <p className="author">{quote.author}</p>
                <p className="add-favorite" onClick={(e) => addToFavorites(quote.id)}><Heart style={{fill: faveStyle}}/></p>
            </footer>
        </article>  
    )
}

export default QuoteCard;


