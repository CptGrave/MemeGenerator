import trollface from "../../src/trollface.png"
export default function Header() {
  return(
    <header className="header">
      <img className="header--logo" src={trollface}></img>
      <h2 className="header--title">Meme Generator</h2>
      <h3 className="header--project">React course project 3</h3>
    </header>
  )
}