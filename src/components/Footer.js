import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

function Footer(){

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" col-md={3} col-sm={12}>
                        Berkeczi Arnold    
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" col-md={3}>
                        This site was made by Berkeczi Arnold.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;