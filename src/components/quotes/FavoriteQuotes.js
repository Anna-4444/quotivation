import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard.js";

const FavoriteQuotes = ({favoriteQuotes, maxFaves, removeFromFavorites}) => {
    return (
        <section className="favorite-quotes">
          <div className="quotes wrapper">
            <h3>Top 3 favorite quotes</h3>
            {favoriteQuotes.length > 0 && 
            (<ul>{favoriteQuotes.map((quote, index) => (<FavoriteQuoteCard key={quote.id} quote={quote} listPosition={index + 1} removeFromFavorites={removeFromFavorites}/>))}</ul>)}
            <div className="favorite-quotes-description">
              {favoriteQuotes.length < maxFaves && <p>You can add {maxFaves - favoriteQuotes.length} more {maxFaves - favoriteQuotes.length === 1 ? "quote" : "quotes"} to your top three favorites by selecting from the options below.</p>}
            </div>
          </div>
        </section>
    )
}

export default FavoriteQuotes;