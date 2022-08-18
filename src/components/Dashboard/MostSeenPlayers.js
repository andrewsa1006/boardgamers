import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = ["KnightFinch", "DargonZz", "Jboozie", "MeakerZ", "MatsuSoul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Win",
      data: labels.map(() => Math.floor(Math.random() * 15)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.85)",
    },
    {
      label: "Loss",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.85)",
    },
  ],
};

const MostSeenPlayers = () => {
  return (
    <div>
      <Card className="text-center" style={{ width: "100%", minHeight: "300px" }}>
        <Card.Body>
          <Card.Title style={{ marginBottom: "35px" }}>Most Seen Players</Card.Title>
          <Bar options={options} data={data} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MostSeenPlayers;
