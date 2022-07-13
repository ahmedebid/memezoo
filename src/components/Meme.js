import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1h7in3.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(fetchedData => setAllMemes(fetchedData.data.memes))
    }, [])

    function getMemeImage() {
        const randomMemeIndex = Math.floor(Math.random() * allMemes.length);
        const randomMemeUrl = allMemes[randomMemeIndex].url;
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
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    id="bottom-phrase" 
                    name="bottomText" 
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    onChange={handleChange} 
                />
                <button 
                    id="generate-button" 
                    onClick={getMemeImage}
                >
                    Get New Meme 🤣
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