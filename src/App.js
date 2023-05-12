import "./styles/app.scss";
import ButtonPad from "./containers/ButtonPad/ButtonPad";
import ControlPanel from "./containers/ControlPanel/ControlPanel";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  //const [currAudio, setAudio] = useState({});
  //const [volume, setVolume] = useState(50);
  //const [power, setPower] = useState(true);

  const audios = useSelector((state) => state.drum.audios);
  //const pow = useSelector((state) => state.drum.pow);
  const currAudio = useSelector((state) => state.drum.currAudio);

  useEffect(() => {
    const display = document.getElementById("display");
        if(typeof(currAudio.name) === "undefined") {
          display.value = " ";
        } else {
          display.value = `${currAudio.name}`;
        }
  });

  return (
    <Container fluid = "sm" className="d-flex justify-content-center align-items-center App">
      <Row className="shadow-sm drum-machine d-flex">
        <Col md = {6} className="button-pad">
          <Row id="drum-machine" >
              {audios.map((audio, i) => {
                return <Col key = {i} className="col-4"><ButtonPad className = 'm-2' audio = {audio} /></Col>
              })}
          </Row>
        </Col>
        <Col md = {6} className="">{<ControlPanel />}</Col>
      </Row>
    </Container>
  );
}

export default App;
