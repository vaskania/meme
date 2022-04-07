import memesData from "../memesData";

const Meme = () => {
  const getRandomMeme = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    console.log(url);
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
    </main>
  );
};

export default Meme;
