import ComponentStructureOne from "../components/ComponentStructureOne";
import ComponentStructureTwo from "../components/ComponentStructureTwo";
import Divider from "../base/Divider";
import PageLayout from "../PageLayout";

const ComponentStructure = () => {
  return (
    <PageLayout>
      <ComponentStructureOne />
      <Divider />
      <ComponentStructureTwo />
    </PageLayout>
  );
};

export default ComponentStructure;
