import DashboardPageClass from "../components/DashboardPageClass";
import DashboardPageHook from "../components/DashboardPageHook";
import PageLayout from "../PageLayout";
import Divider from "../base/Divider";

const Dashboard = () => {
  return (
    <PageLayout>
      <DashboardPageClass />
      <Divider />
      <DashboardPageHook />
    </PageLayout>
  );
};

export default Dashboard;
