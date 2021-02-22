import data from "../../public/data";
import styles from "./Home.module.css";

const About = ({ readme }) => {
	return (
		<div className={`section ${styles.handwrite}`} id="about">
			<div className="container">
				<div className="about-section">
					<div className="content">
						<div className="row">
							<div className="col-lg-8">
								<h1>About Me</h1>
								<article dangerouslySetInnerHTML={{ __html: readme }}></article>
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
							<div className="col-lg-4 d-none d-sm-none d-md-block">
								<div className="image-wrapper">
									<img
										src={data.aboutImage}
										className="rounded float-right img-fluid shadow"
										alt="about"
									></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
