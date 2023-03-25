
import React from "react"
export default function Meme() {
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

  const [allMemeImages,setAllMemeImages] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
      
  },[])

  function getMemeImage() {
      const memesArray = allMemeImages
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prevMeme=>({...prevMeme,randomImage:url}))
    }

    function handleChange(event) {
      event.preventDefault()
      const {name,value} = event.target
      setMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
      }))
  }
    
  return(
    <main>
      <div className="form">
        <input 
          type="text" 
          className="form--inputs" 
          placeholder="Top text here"
          name="topText"
          onChange={handleChange}
          value={meme.topText}>
                    </input>
        <input 
          type="text" 
          className="form--inputs" 
          placeholder="Bottom text here" 
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}>
        </input>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
      </div>
      <div className="meme">
        <img className="meme--img"src={meme.randomImage}></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      
    </main>
  )
}