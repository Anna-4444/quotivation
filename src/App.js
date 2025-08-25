import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader } from "react-feather";
import Quotes from "./components/quotes/Quotes.js";
// import CategoryForm from "./components/quotes/CategoryForm.js";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

  const fetchQuotes = async () => {
    try {
      setLoading(true)
      const response = await fetch(quotesUrl);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      const results = await response.json();
      setQuotes(results);

    } catch (error) {
      console.log("something went wrong", error.message)
    }
    setLoading(false)
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const filteredQuotes = category === "All" ? quotes : quotes.filter((quote) => 
    quote.categories.includes(category))

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div className='App'>
      <Header />
      <main>
        {/* <CategoryForm categories={categories}/> */}
        {loading ? <Loader /> : <Quotes quotes={filteredQuotes} categories={categories} category={category} handleCategoryChange={handleCategoryChange}/>}
      </main>
      <Footer />
    </div>
  );
}
export default App;
