import { useEffect, useState } from "react";
import "./autosearch.css";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({})

  const fetchData = async () => {
    if(cache[input]) {
        console.log('caching ', input)
        setResult(cache[input]);
        return;
    }
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await res.json();
    setResult(json?.recipes);
    setCache(prev => ({...prev, [input]: json?.recipes}))
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 400)
     return () => {
        clearTimeout(timer)
     }
  }, [input])

  return (
    <div className="auto-complete-container">
      <h1>Autocomplete Search</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={()=> setShowResults(false)}
        />
      </div>
      {showResults && <div className="result-container">
         {result.map((item) => <span className="result" key={item.id}>{item?.name}</span>)}
      </div>}
    </div>
  );
};

export default AutoComplete
