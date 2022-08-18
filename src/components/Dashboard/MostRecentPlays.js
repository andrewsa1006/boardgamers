import Card from "react-bootstrap/Card";
import GamePlayBanner from "./GamePlayBanner";
import { useSelector } from "react-redux";

const MostRecentPlays = () => {
  const plays = useSelector((state) => state.play.plays);

  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>Most Recent Plays</Card.Title>
        {plays.map((play) => {
          return <GamePlayBanner key={play.play_id} play={play} />;
        })}
      </Card.Body>
    </Card>
  );
};

export default MostRecentPlays;
