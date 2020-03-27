import React, { useState, useEffect } from "react";
import classes from "./Dashboard.module.css";
import GaugeChart from "react-gauge-chart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CandleChart from "../Containers/CandleChart";
import RealtimeChart from "../Containers/RealtimeChart";
import mqtt from "mqtt";

function Dashboard() {
  const [extrusora, setExtrusora] = useState(0);
  const [torno, setTorno] = useState(0);
  const [inyectora, setInyectora] = useState(0);
  const [ambiente, setAmbiente] = useState(0);
  // connect options
  const options = {
    connectTimeout: 4000,

    // Authentication
    clientId: "emqx",

    keepalive: 60,
    clean: true
  };

  // WebSocket connect url
  const WebSocket_URL = "wss://iotec.tk:8094/mqtt";

  // TCP/TLS connect url
  const TCP_URL = "mqtt://localhost:1883";
  const TCP_TLS_URL = "mqtts://localhost:8883";

  useEffect(() => {
    const client = mqtt.connect(WebSocket_URL, options);
    client.on("connect", () => {
      console.log("Connect success");

      client.subscribe("testtopic", { qos: 0 }, error => {
        if (!error) {
          console.log("Subscribe Success");
        } else {
          console.log("Subscripcion falliada");
        }
      });
    });

    // handle message event
    client.on("message", (topic, message) => {
      console.log("dentro del los mensajes");
      if (topic == "testtopic") {
        console.log(JSON.parse(message.toString()));
        const allElements = JSON.parse(message.toString());

        const ext = allElements["extrusora"];
        const tor = allElements["torno"];
        const inyec = allElements["inyectora"];
        const amb = allElements["ambiente"];

        setExtrusora(ext);
        setInyectora(inyec);
        setTorno(tor);
        setAmbiente(amb);
      }
    });

    client.on("reconnect", error => {
      console.log("reconnecting:", error);
    });

    client.on("error", error => {
      console.log("Connect Error:", error);
    });
  }, []);
  return (
    <div className={classes.Main}>
      <p className={classes.Title}>Dashboard</p>
      <Container>
        <Row>
          <Col>
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={3}
              arcsLength={[0.25, 0.5, 0.25]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={extrusora}
              arcPadding={0.02}
              textColor={"black"}
            />
            <p className={classes.TextoAlinear}>Temperatura Extrusora</p>
          </Col>
          <Col>
            <GaugeChart
              id="gauge-chart4"
              nrOfLevels={3}
              arcsLength={[0.25, 0.5, 0.25]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={torno}
              arcPadding={0.02}
              textColor={"black"}
            />
            <p className={classes.TextoAlinear}>Temperatura Torno</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <GaugeChart
              id="gauge-chart3"
              nrOfLevels={3}
              arcsLength={[0.25, 0.5, 0.25]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={inyectora}
              arcPadding={0.02}
              textColor={"black"}
            />
            <p className={classes.TextoAlinear}>Temperatura Inyectora</p>
          </Col>
          <Col>
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={3}
              arcsLength={[0.25, 0.5, 0.25]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={ambiente}
              arcPadding={0.02}
              textColor={"black"}
            />
            <p className={classes.TextoAlinear}>Temperatura Ambiente</p>
          </Col>
        </Row>
      </Container>
      <CandleChart />
      <RealtimeChart />
    </div>
  );
}

export default Dashboard;
