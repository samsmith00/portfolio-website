import { Container, Row, Col, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCards';  
import { projectData } from "../constants/projectData"     
import 'animate.css';


export const Projects = () => {

  const classMap = {
    "RLC Circuit Lab": "large-img",
    "Asteroids and Aliens": "medium-img",
    "eBay Clone": "large-img"
  }

    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                  <div className='project-heading-container'>
                    <h2>Notable Projects</h2>
                    <a href="https://github.com/samsmith00" target="_blank" rel="nonopener nonreferrer">
                      <button class="shadow__btn">
                        See more on GitHub
                      </button>
                    </a>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp">
                        <Row>
                          {
                            projectData.map((project, index) => {
                              const className = classMap[project.title] || "";

                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  className={className}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Content>
                  </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }