function Navbar() {
  return (
    <header>
      <a href="/" className="logo-container" aria-label="Home">
        <div className="logo">
          <img
            src="/ticz-logo.svg"
            alt="Ticz Company Logo"
            width="24"
            height="24"
          />
        </div>
        <img src="/ticz-text.svg" alt="Ticz Company Text Logo" />
      </a>

      <nav className="main-nav" id="main-menu" aria-label="Main">
        <ul>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/about">My Tickets</a>
          </li>
          <li>
            <a href="/services">About Project</a>
          </li>
        </ul>
      </nav>

      <button className="ticket-btn">
        <span className="sr-only">My Tickets</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="8"
          viewBox="0 0 18 8"
          fill="none"
        >
          <path
            d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM1 4.5L17 4.5V3.5L1 3.5V4.5Z"
            fill="#0A0C11"
          />
        </svg>
      </button>
    </header>
  );
}

export default Navbar;
