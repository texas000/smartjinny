import data from '../../public/data';

const Work = () => {
    return (
        <div className="section" id="work">
        <div className="container">
          <div className="work-wrapper">
            <h1>Work</h1>
            <div className="grid">
                {data.projects.map(project=> (
                  <div className="card" key={project.id}>
                    <div className="card-header">{project.title}</div>
                    <div className="card-body">
                      {project.para}
                      <img src={project.imageSrc}/>
                      {project.url}
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    )
}

export default Work