import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1h7in3.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        // Get random meme from memesData array
        const randomMemeIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const randomMemeUrl = allMemeImages.data.memes[randomMemeIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMemeUrl
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <>
            <div className="form">
                <input 
                    type="text" 
                    id="top-phrase" 
                    name="topText" 
                    placeholder="top text"
                    value={meme.topText}
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    id="bottom-phrase" 
                    name="bottomText" 
                    placeholder="bottom text"
                    value={meme.bottomText}
                    onChange={handleChange} 
                />
                <button 
                    id="generate-button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.randomImage} alt="a meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </>
    )
}