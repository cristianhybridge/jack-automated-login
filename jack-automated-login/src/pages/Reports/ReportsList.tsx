import {useReportDetails} from "../../hooks/useReportDetails.ts";
import {List, ListItem} from "@chakra-ui/react";
import ReportItem from "./ReportItem.tsx";

type Props = {};

function ReportsList({}: Props) {
  const {data: reportsData = [], isLoading: reportsDataLoading} = useReportDetails()

  return (
    <List spacing={3}>
      {reportsData.map((r) => (
        <ReportItem report={r} key={r.report_details_id} />
      ))}
    </List>
  );
}

export default ReportsList;
