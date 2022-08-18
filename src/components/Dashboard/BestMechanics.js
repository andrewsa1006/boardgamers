import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3"],
  datasets: [
    {
      label: "Wins with mechanic",
      data: [2, 9, 3],
      backgroundColor: "rgba(255, 99, 132, 0.8)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const BestMechanics = () => {
  return (
    <Card className="text-center" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Your Best Mechanics</Card.Title>
        <Row>
          <Radar data={data} />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BestMechanics;
