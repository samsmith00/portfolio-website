import { Col } from 'react-bootstrap'

export const SkillCards = ({ title, imgUrl }) => {
    return (
        <Col xs={12} sm={6} md={3} lg={3}>
            <div className='skill-card'>
                <div className="skill-card-img-bx">
                    <img src={imgUrl} />
                <div className="skill-txtx">
                    <h4>{title}</h4>
                    </div>
                </div>
            </div>
        </Col>
    )
}