import { useState } from "react";
import Article from "./components/article";
import ButtonChange from "./components/button";
import PostDate from "./containers/Post";

function App() {
  const [color, setColor] = useState("#EEE");
  const [colorWrited, setColorWrited] = useState("#222");
  const [colorButton, setColorButton] = useState("#3892c2")
  const [colorWr, setColorWr] = useState("#222")
  const [ColorLine, setColorLine] = useState("#3892c2")
  const changeColor = () => {
    if (color === "#EEE") {
      setColor("#222");
      document.body.style.background = "#222";
      setColorWrited("#EEE");
      setColorButton("#df372b")
      setColorWr("#EEE")
      setColorLine("#df372b")
    } else if (color === "#222"){
      setColor("#EEE");
      document.body.style.background = "#EEE";
      setColorWrited("#222");
      setColorButton("#3892c2")
      setColorWr("#222")
      setColorLine("#3892c2")
      
    }
  };
  return (
    <>
      <ButtonChange click={changeColor} colorButton={colorButton} colorWr={colorWr} />
      <div id="principal">
        <div className="app">
          {PostDate.map((value) => {
            return <Article key={value.id} colorWrited={colorWrited}  ColorLine={ColorLine}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
