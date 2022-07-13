import logo from "../images/logo.png";

export default function Header() {
    return (
        <header>
            <img className="logo-icon" src={logo} alt="website's logo" />
            <h1 className="website-title">Memezoo</h1>
        </header>
    )
}