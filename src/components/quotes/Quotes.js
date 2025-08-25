import React from "react";
import QuoteCard from "./QuoteCard.js";

const Quotes = ({ quotes }) => {
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                {quotes.map((quote) => (<QuoteCard key={quote.id} quote={quote}/>))}
                {/* {JSON.stringify(quotes)} */}
            </div>
        </section>
    )
}

export default Quotes;