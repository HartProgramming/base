import { useEffect, useState } from "react";
import AdvancedSnackbar from "../components/Elements/Snackbars/Snackbar";

export default function useSnack(pos = null, setEditTitle) {
  const [openSnack, setOpenSnack] = useState(false);
  const [messageSnack, setMessageSnack] = useState(null);
  const [typeSnack, setTypeSnack] = useState(null);
  const [laySnack, setLaySnack] = useState(null);
  const [editModeSnack, setEditModeSnack] = useState(null);
  const [successModeSnack, setSuccessModeSnack] = useState(null);
  const [cancelModeSnack, setCancelModeSnack] = useState(null);
  const handleSnackOpen = () => {
    setEditTitle(true);
    setOpenSnack(true);
    setEditModeSnack(true);
    setMessageSnack("Edit Mode");
    setTypeSnack("info");
    setLaySnack(pos);
    console.log(memo);
    console.log(log);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
    setEditModeSnack(false);
    setLaySnack(null);
    setMessageSnack(null);
    setSuccessModeSnack(false);
    setTypeSnack(null);
    setCancelModeSnack(false);
  };

  const onSnackCancel = () => {
    setEditTitle(false);
    setMessageSnack("Editing Mode Cancelled");
    setTypeSnack("warning");
    setLaySnack(pos);
    setOpenSnack(true);
    setCancelModeSnack(true);
  };

  useEffect(() => {
    if (successMode === true) {
      setLaySnack("top-center");
      setMessageSnack("Updates Made");
      setEditModeSnack(false);
      setTypeSnack("success");
      console.log("hi");
      console.log(successMode);
      console.log(message);
      console.log(lay);
      console.log(editMode);
    }
  }, [successMode]);

  return [
    openSnack,
    messageSnack,
    typeSnack,
    laySnack,
    editModeSnack,
    cancelModeSnack,
    setCancelModeSnack,
    successModeSnack,
    setSuccessModeSnack,
    handleSnackOpen,
    handleSnackClose,
    onSnackCancel,
  ];
}
