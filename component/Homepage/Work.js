import data from "../../public/data";
import styles from "./Home.module.css";

const Work = () => {
	return (
		<div className={`section ${styles.handwrite}`} id="work">
			<div className="container">
				<div className="work-wrapper">
					<h1>Work</h1>
					<div className="grid">
						<div className="row">
							{data.projects.map((project) => (
								<div className="col-lg-4 text-center" key={project.id}>
									<div className="card border-white my-2">
										<div className="card-img">
											<img
												src={project.imageSrc}
												className="img-fluid shadow mb-2"
											/>
										</div>
										<div className="card-header bg-transparent">
											<a target="_blank" href={project.url}>
												{project.title}
											</a>
										</div>
										<div className="card-body text-left">
											{/* <img
												src={project.imageSrc}
												className="img-fluid shadow mb-2"
											/> */}
											{project.para}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
