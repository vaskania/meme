import { useState } from "react";
import memesData from "../memesData";


const Meme = () => {
  const [memeImage, setMemeImage] = useState('')


  const getRandomMeme = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button onClick={getRandomMeme} className="form--button">
          Get an new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt='memeImage' className="meme--image"/>
    </main>
  );
};

export default Meme;
