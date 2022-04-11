import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getRandomMeme = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
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
      <img src={meme.randomImage} alt="memeImage" className="meme--image" />
    </main>
  );
};

export default Meme;
