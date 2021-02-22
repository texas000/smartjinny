import data from "../../public/data";
import styles from "./Home.module.css";

const Skills = () => {
	return (
		<div className={`section ${styles.handwrite}`}>
			<div className="container">
				<div className="skills-container">
					<h1>Skills</h1>
					<div className="skills-grid">
						<li>Nextjs</li>
						<li>Reactjs</li>
						<li>Nodejs</li>
						<li>SQL</li>
						<li>C#</li>
						<li>Python</li>
						<li>Photoshop</li>
						<li>Office</li>
						<li>Shopify</li>
						<li>Magento</li>
						<li>Stripe</li>
						<li>Google Pay</li>
						<li>Amazon Pay</li>
						<li>Mailchimp</li>
						{/* <div className="row">
							{data.skills.map((skill) => (
								<div className="skill col-4" key={skill.id}>
									<img
										src={skill.img}
										alt="css"
										className="img-fluid"
										width="30px"
										height="30px"
									></img>
									<p>{skill.para}</p>
								</div>
							))}
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
