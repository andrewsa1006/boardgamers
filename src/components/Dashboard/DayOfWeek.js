import Card from "react-bootstrap/Card";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Rolling 7 Days",
      data: labels.map(() => Math.floor(Math.random() * 20)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const DayOfWeek = () => {
  return (
    <Card className="text-center" style={{ width: "100%", minHeight: "300px" }}>
      <Card.Body>
        <Card.Title>Recent Plays By Day of Week </Card.Title>
        <Line options={options} data={data} />
      </Card.Body>
    </Card>
  );
};

export default DayOfWeek;
