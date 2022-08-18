import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const GamePlayBanner = ({ play }) => {
  const user = useSelector((state) => state.user);
  const winner = play.players.filter((player) => player.win);
  return (
    <Card style={{ width: "100%" }}>
      {play.players.map((player) =>
        player.display_name === user.display_name ? (
          <Card.Body
            style={player.win ? { background: "rgba(93, 240, 135, 0.5)" } : { background: "rgba(237, 90, 90,0.5)" }}
            key={player.display_name}
          >
            <Card.Title>{play.game_name}</Card.Title>
            <Row>
              <Col>{player.display_name}</Col>
              <Col>Score: {player.score}</Col>
              {!player.win ? <Col>Lost To: {winner[0].display_name}</Col> : <Col></Col>}
            </Row>
          </Card.Body>
        ) : null
      )}
    </Card>
  );
};

export default GamePlayBanner;
