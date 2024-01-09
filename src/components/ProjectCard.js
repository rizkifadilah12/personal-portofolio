import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,url,urlGit,urlGit2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          <span>Demo :<a href={url} className="text-decoration-none text-white">Clikc Here</a> </span><br/>
          <span>Repo FE :<a href={urlGit} className="text-decoration-none text-white">Clikc Here</a> </span><br/>
          <span>Repo BE :<a href={urlGit2} className="text-decoration-none text-white">Clikc Here</a> </span>
        </div>
      </div>
    </Col>
  )
}
