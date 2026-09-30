import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="koffiehuis-footer">
        <Container>
            <Row>
                <Col className="text-center py-4">
                    <p className="footer-brand mb-1">Coffee House</p>
                    <p className="footer-tagline mb-0">Premium Coffee • Fresh Roasted</p>
                    <p className="footer-copy mt-2">&copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer