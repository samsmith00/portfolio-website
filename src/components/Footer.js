import { Container, Col, Row } from "react-bootstrap"
import { Zigzag } from "./svgComponents/ZigzagSVG"



export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} className="text-start">
                        <Zigzag className={"zigzag-wrapper"}/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}