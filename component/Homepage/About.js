import data from '../../public/data';

const About = () => {
    return (
        <div className="section" id="about">
        <div className="container">
          <div className="about-section">
            <div className="content">
              <h1>About Me</h1>
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