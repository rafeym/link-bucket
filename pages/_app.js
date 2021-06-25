import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import Navbar from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <Component {...pageProps} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyApp
