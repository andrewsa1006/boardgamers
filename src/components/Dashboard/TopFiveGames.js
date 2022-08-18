import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "react-bootstrap/Card";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Terraforming Mars", "Dune: Imperium", "DC Deckbuilder", "Arcana", "Gaia Project"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.85)",
        "rgba(54, 162, 235, 0.85)",
        "rgba(255, 206, 86, 0.85)",
        "rgba(75, 192, 192, 0.85)",
        "rgba(153, 102, 255, 0.85)",
      ],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const TopFiveGames = () => {
  return (
    <Card className="text-center" style={{ width: "100%", minHeight: "515px" }}>
      <Card.Body>
        <Card.Title>Most played Games</Card.Title>
        <Pie data={data} />
      </Card.Body>
    </Card>
  );
};

export default TopFiveGames;
