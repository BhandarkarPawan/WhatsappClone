import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/footer";
import Header from "../components/header";
export interface Props {
  centerPanel: React.ReactElement;
}

const SpotlightLayout: React.FC<Props> = (props) => {
  const CenterPanel = props.centerPanel;

  return (
    <Container>
      <Row>
        <Col>
          <Header title="Chat App" />
        </Col>
      </Row>
      {CenterPanel}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default SpotlightLayout;
