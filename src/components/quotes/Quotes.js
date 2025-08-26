import React from "react";
import QuoteCard from "./QuoteCard.js";
import CategoryForm from "./CategoryForm.js";

const Quotes = ({ quotes, categories, category, handleCategoryChange, addToFavorites, favoriteQuotes}) => {
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="category-header">
                    <h2>Pick your Favorite Quotes Below</h2>
                    {quotes.length > 0 && <p>You have a colection of {quotes.length} great {category === "All" ? "" : category} {quotes.length === 1 ? "quote!" : "quotes!"}</p>}
                    <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange}/>
                </div>
                {quotes.map((quote) => (<QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes}/>))}
            </div>
        </section>
    )
}

export default Quotes;