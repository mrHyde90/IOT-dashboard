import React from 'react';
import classes from './Dashboard.module.css';
import GaugeChart from 'react-gauge-chart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CandleChart from "../Containers/CandleChart";

function Dashboard() {
  return (
    <div >
        <p className={classes.Title}>
            Dashboard
        </p>
        <Container>
            <Row>
                <Col>
                    <GaugeChart id="gauge-chart5"
                        nrOfLevels={3}
                        arcsLength={[0.25, 0.5, 0.25]}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={0.37}
                        arcPadding={0.02}
                        textColor={"black"}
                    />
                    <p className={classes.TextoAlinear}>Temperatura Extrusora</p>
                </Col>
                <Col>
                     <GaugeChart id="gauge-chart4"
                        nrOfLevels={3}
                        arcsLength={[0.25, 0.5, 0.25]}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={0.37}
                        arcPadding={0.02}
                        textColor={"black"}
                    />
                    <p className={classes.TextoAlinear}>Temperatura Torno</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GaugeChart id="gauge-chart3"
                        nrOfLevels={3}
                        arcsLength={[0.25, 0.5, 0.25]}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={0.37}
                        arcPadding={0.02}
                        textColor={"black"}
                    />
                   <p className={classes.TextoAlinear}>Temperatura Inyectora</p>
                </Col>
                <Col>
                     <GaugeChart id="gauge-chart2"
                        nrOfLevels={3}
                        arcsLength={[0.25, 0.5, 0.25]}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={0.37}
                        arcPadding={0.02}
                        textColor={"black"}
                    />
                   <p className={classes.TextoAlinear}>Temperatura Ambiente</p>
                </Col>
            </Row>
        </Container>
        <CandleChart />
    </div>
  );
}

export default Dashboard;
