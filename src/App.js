import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => setData(response.products));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.dentsu.com/assets/images/main-logo-alt.png"
          className="App-logo"
          alt="logo"
        />
        <p>Integrated Marketing Solutions & Agency Services</p>
      </header>
      <ul>
        {data?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
