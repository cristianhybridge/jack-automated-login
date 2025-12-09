import CreateReport from "./Reports/CreateReport.tsx";
import {Box, Button, Divider, HStack} from "@chakra-ui/react";
import ReportsList from "./Reports/ReportsList.tsx";
import {useState} from "react";

type Props = {};

function Home({}: Props) {
  const [showResume, setShowResume] = useState<boolean>(false);
  const handleShowResume = () => {
    if (!showResume) setShowResume(true);
  };
  return (
    <>
      <Box ms={8}>
        <HStack>
          <CreateReport />
        <Divider orientation="vertical" height="500px" m="3rem" />
          <ReportsList />
        </HStack>
        <Button isDisabled={showResume} onClick={handleShowResume} mt={5}>
          {!showResume ? <>Generar resumen</> : <>Resumen Generado</>}
        </Button>
        {showResume && <>Resumen...</>}
      </Box>
    </>
  );
}

export default Home;
