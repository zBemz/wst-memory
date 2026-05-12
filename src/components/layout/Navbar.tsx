export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo-wrap">
          <div className="logo-glow"></div>

          <div>
            <h2>WST-MEMORY</h2>
            <p>WAVE SYNAPTIC TRANSFER</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#architecture">Architecture</a>
          <a href="#future">Future</a>
        </nav>

        <button className="btn btn-primary">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}