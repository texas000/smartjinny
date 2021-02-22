import data from "../../public/data"
import styles from "./Home.module.css";

const Footer = () => {
  return (
    <div className={`footer ${styles.handwrite}`} id="contact">
      <div className="container">
        <div className="footer-container my-4">
            <h1>Contact</h1>
            <h2>{data.contactSubHeading} <a
							target="_blank"
							href={`mailto:${data.contactEmail}?subject=Contacting%20via%20Smartjinny.com`}
							className={`btn btn-outline-primary py-2 my-2 mx-3 shadow ${styles.para}`}
						>
							CONNECT WITH ME
						</a></h2>
            
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                key={socialLink.url}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <img src={socialLink.img} width="30" height="30" alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made by Smartjin
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
