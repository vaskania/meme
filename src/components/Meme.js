import {useState, useEffect} from "react";
// import memesData from "../memesData";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        const getMemes = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    const getRandomMeme = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const {url} = allMemes[randomNumber];
        setMeme((prevMeme) => {
            return {...prevMeme, randomImage: url};
        });
    };

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getRandomMeme} className="form--button">
                    Get an new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="troll" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;
