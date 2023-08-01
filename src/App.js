import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import card_data from "./data";
import Card from "./components/Card";

function App() {

  const C=card_data.map((data)=>{
    return <Card
              img={data.img}
              heading={data.heading}
              text={data.text}
              client={data.client}
            />  
  });
  return (
    <div>
      <Navbar />
      <Header />
      <div className="cards">{C}</div>
      <div className="view_more">
        <p>View more works on <a href="www.youtube.com">Youtube</a></p>
      </div>
    </div>
  );
}

export default App;
