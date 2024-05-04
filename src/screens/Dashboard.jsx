import { DashBody, DashTopBar } from "../components/dashboard";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashTopBar />
      <DashBody />
    </div>
  );
}

export default Dashboard;
