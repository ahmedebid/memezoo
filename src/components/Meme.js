import React from "react";
import memesData from "../memesData";

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        // Get random meme from memesData array
        const randomMemeIndex = Math.floor(Math.random() * memesData.data.memes.length);
        const randomMemeUrl = memesData.data.memes[randomMemeIndex].url;
        setMemeImage(randomMemeUrl);
    }

    return (
        <>
            <form>
                <input type="text" id="top-phrase" name="top-phrase" placeholder="top text" />
                <input type="text" id="bottom-phrase" name="bottom-phrase" placeholder="bottom text" />
                <input type="button" id="generate-button" value="Get a new meme image 🖼️" onClick={getMemeImage} />
            </form>
            <img className="meme-img" src={memeImage} alt="a meme"/>
        </>
    )
}