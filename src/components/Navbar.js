const Navbar = (props) => {
  return (
    <nav className="navigation">
      <ul>
        {props.pageList.map((link, index) => {
          if (link.feature === 1) {
            return (
              <li key={index} className="navigation__item">
                <a
                  href={link.src}
                  className="navigation__link"
                  target={link.target}
                >
                  {link.linkText}
                </a>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
