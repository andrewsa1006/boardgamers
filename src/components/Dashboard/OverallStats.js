import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiChart } from "react-icons/gi";
import { GiArrowed } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { GiTabletopPlayers } from "react-icons/gi";

const OverallStats = () => {
  return (
    <Card className="text-center" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Overall Play Stats</Card.Title>
        <Row>
          <Col>
            <h5>
              {" "}
              <GiChart /> Total Games Played
            </h5>
            <h3>71</h3>
          </Col>
          <Col>
            <h5>
              {" "}
              <GiTrophyCup />
              Total Wins
            </h5>
            <h3>55</h3>
          </Col>
          <Col>
            <h5>
              {" "}
              <GiArrowed /> Total Losses
            </h5>
            <h3>16</h3>
          </Col>
          <Col>
            <h5>
              {" "}
              <GiTabletopPlayers /> Unique Players
            </h5>
            <h3>21</h3>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OverallStats;
