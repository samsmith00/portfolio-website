import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { skillsData } from "../constants/skillsData"
import { SkillCards } from "./SkillCards";


export const Skills = () => {
    
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Row>
                                {
                                    skillsData.map((skill, index) => {
                                        return (
                                            <SkillCards
                                                key={index}
                                                {...skill}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )
}