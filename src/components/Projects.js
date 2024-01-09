import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/cms.webp";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    { 
      title: "Sistem Lelang Online",
      description: "Fullstack Dev",
      imgUrl: projImg1,
      url : "https://drive.google.com/file/d/1L_uvJ5bZXSgpdbTEwXys1GX_th4f4Pvq/view?usp=sharing",
      urlGit : "https://github.com/rizkifadilah12/Sistem-Lelang-Online-FrontEnd",
      urlGit2 : "https://github.com/rizkifadilah12/Sistem-Lelang-Online-Backend",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url : "#",
      urlGit :  "#",
      urlGit2 :  "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url : "#",
      urlGit :  "#",
      urlGit2 :  "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url : "#",
      urlGit :  "#",
      urlGit2 :  "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url : "#",
      urlGit :  "#",
      urlGit2 :  "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url : "#",
      urlGit :  "#",
      urlGit2 :  "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>several projects that I made during my school years and my internship</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
