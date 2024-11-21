import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { Download } from "@mui/icons-material";
import axios from "axios";

interface DumpPslistButtonProps {
  evidenceId: string | undefined;
  pid: number | undefined;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const DumpPslistButton: React.FC<DumpPslistButtonProps> = ({
  evidenceId,
  pid,
  loading,
  setLoading,
}) => {
  const handleDump = async () => {
    setLoading(true);
    try {
      await axios.post(`/api/evidence/tasks/dump/process/pslist/`, {
        pid,
        evidenceId,
      });
      // Loading remains true until task completes and WebSocket updates it
    } catch (error) {
      // Handle the error appropriately
      console.error("Error dumping process:", error);
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{ mr: 2 }}
      color="error"
      size="small"
      onClick={handleDump}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={20} /> : <Download />}
    >
      {loading ? "Dumping..." : "Dump (pslist)"}
    </Button>
  );
};

export default DumpPslistButton;