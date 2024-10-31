import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import {
  Button,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NetworkGraph from "./NetworkGraph";
import { BugReportRounded } from "@mui/icons-material";
import { Connection } from "../../types";

const NetGraph: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Connection[]>([]);

  const fetchNetGraph = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/evidence/${id}/plugin/volatility3.plugins.windows.netscan.NetScan`,
      );
      setData(response.data.artefacts);
    } catch (error) {
      console.error("Error fetching netgraph details", error);
    }
  };

  const handleOpen = () => {
    fetchNetGraph();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={"NetGraph"} arrow key={"Malfind"} placement="top">
        <span>
          <Button
            color={"info"}
            value={"plugin.name"}
            variant="outlined"
            size="small"
            onClick={handleOpen}
            startIcon={<BugReportRounded />}
            sx={{
              marginRight: 1,
              marginBottom: 1,
            }}
            disabled={false}
          >
            {"Network Graph"}
          </Button>
        </span>
      </Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            background: "#121212",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <DialogTitle>
          "Network Graph"
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <NetworkGraph data={data} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NetGraph;
