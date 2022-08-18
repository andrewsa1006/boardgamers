import MostSeenPlayers from "../components/Dashboard/MostSeenPlayers";
import TopFiveGames from "../components/Dashboard/TopFiveGames";
import OverallStats from "../components/Dashboard/OverallStats";
import DayOfWeek from "../components/Dashboard/DayOfWeek";
import MostRecentPlays from "../components/Dashboard/MostRecentPlays";
import BestMechanics from "../components/Dashboard/BestMechanics";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container>
      <Row className="mt-1">
        <OverallStats />
      </Row>
      <Row>
        <Col className="mt-1">
          <TopFiveGames />
        </Col>
        <Col className="mt-1" sm={8}>
          <MostRecentPlays />
        </Col>
      </Row>
      <Row>
        <Col className="mt-1">
          <BestMechanics />
        </Col>
        <Col className="mt-1">
          <MostSeenPlayers />
        </Col>
        <Col className="mt-1">
          <DayOfWeek />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
