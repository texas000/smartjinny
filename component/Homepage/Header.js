import data from '../../public/data';

const Header = () => {
    return (
        <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper">
            <h2>Hi, I'm {data.name}
            <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]}
              </h1>
              <h1>
                {data.headerTagline[1]}
              </h1>
              <h1>
                {data.headerTagline[2]}
              </h1>
            </div>
            <p>{data.headerParagraph}</p>
            <a
              href={`mailto:${
                data.contactEmail
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </div>
        </div>
      </div>
    )
}

export default Header