import data from "../../public/data";
import styles from "./Home.module.css";

const Header = () => {
	return (
		<div className={styles.section} id="home">
			<div className="container">
				<div className="header">
					<div className={`text-center ${styles.headerWrapper}`}>
						<h2 className={styles.title}>
							Hi, I'm {data.name}
							<span role="img" aria-label="Emoji">
								👋
							</span>
						</h2>
					</div>
					<div className={`text-center ${styles.headingWrapper}`}>
						<h1>{data.headerTagline[0]}</h1>
						<h1>{data.headerTagline[1]}</h1>
						<h1>{data.headerTagline[2]}</h1>
					</div>
					<p className={`text-secondary lead ${styles.para}`}>
						{data.headerParagraph}
					</p>
					<div className="text-center">
						<a
							href={`mailto:${data.contactEmail}`}
							className={`btn btn-outline-primary py-3 ${styles.para}`}
						>
							CONNECT WITH ME
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
