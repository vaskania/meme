import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImage, setRandomImage] = useState(
    "http://i.imgflip.com/1bij.jpg"
  );
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

  const getRandomMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setRandomImage(allMemeImages[randomNumber].url);
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
      <img src={randomImage} alt="memeImage" className="meme--image" />
    </main>
  );
};

export default Meme;
