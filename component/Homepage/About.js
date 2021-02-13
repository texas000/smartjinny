import data from '../../public/data';
import styles from './Home.module.css';

const About = ({readme}) => {
    return (
        <div className={`section ${styles.handwrite}`} id="about">
        <div className="container">
          <div className="about-section">
            <div className="content">
              <h1>About Me</h1>
              <article dangerouslySetInnerHTML={{__html: readme}}></article>
              <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              </p>
            </div>
            <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
          </div>
        </div>
      </div>
    )
}

export default About