import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Values from "../Values/Values";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import EditButton from "../../Elements/Buttons/EditButton";
=======
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
import AboutHeadingEdit from "../Heading/AboutHeadingEdit";
import Heading from "../Heading/Heading";
import ContentSection from "../Content/ContentSection";
import useInput from "../../../hooks/useInput";
<<<<<<< HEAD
import { AboutStyles1, AboutStyles2 } from "./AboutStyles";
import { Select } from "@material-ui/core";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
import useSnack from "../../../hooks/useEditTitleSnack";
=======
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import Container from "../../Elements/Layout/Container/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  section: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    color: "white",
    backgroundColor: theme.palette.background.default,
    borderRadius: 14,
    maxWidth: 900,
    minWidth: 300,
  },
  gridContainer: {
    background: theme.palette.background.default,
    display: "flex",
    justifyContent: "left",
  },
}));
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

export default function About({ setError }) {
  const {
    value: missionData,
    handleChange: handleChangeMission,
    setValue: setMissionData,
  } = useInput([]);
  const auth = useSelector((state) => state.auth);
  const layout1 = AboutStyles1();
  const layout2 = AboutStyles2();
  const [data, setData] = useState([]);
<<<<<<< HEAD

  // const [missionData, setMissionData] = useState([]);

=======
  const [metadata, setMetaData] = useState({});
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
  const [historyData, setHistoryData] = useState([]);
  const [valuesData, setValuesData] = useState(null);

  const [editTitle, setEditTitle] = useState(false);
  const [editMission, setEditMission] = useState(false);
  const [editHistory, setEditHistory] = useState(false);
  const [missionBody, setMissionBody] = useState(false);
  const [historyBody, setHistoryBody] = useState(false);
<<<<<<< HEAD
  const [def, setDef] = useState("layout-1");
  const [design, setDesign] = useState(4);
  const [styles, setStyles] = useState(layout1);
  const [
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
  ] = useSnack("top-center", setEditTitle);
=======
  const dispatch = useDispatch();
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

  useEffect(() => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    const fetchData = async () => {
      axiosInstance
        .get("/about/")
        .then((response) => {
          setData(response.data.about_block);
          setMissionData(response.data.mission_statement);
          setHistoryData(response.data.company_history);
          setValuesData(response.data.core_values);
          setMissionBody(
            response.data.mission_statement.body.replace(/<br\s*[\/]?>/gi, "")
          );
          setHistoryBody(
            response.data.company_history.body.replace(/<br\s*[\/]?>/gi, "")
          );
          setMetaData(response.data.metadata);
        })
        .then(dispatch({ type: "FETCH_DATA_SUCCESS" }))
        .catch((err) => {
          setError(err.error);
        })
        .then(dispatch({ type: "FETCH_DATA_FAILURE" }));
    };
    fetchData();
  }, []);

  const updateBlock = (updateBlock) => {
    setSuccessModeSnack(true);
    setData(updateBlock);
    setEditTitle(false);
  };
  const updateMission = (updateMission) => {
    setSuccessModeSnack(true);
    setMissionData(updateMission);
    setMissionBody(updateMission.body.replace(/<br\s*[\/]?>/gi, ""));
    setEditMission(false);
  };
  const updateHistory = (updateHistory) => {
    setSuccessModeSnack(true);
    setHistoryData(updateHistory);
    setHistoryBody(updateHistory.body.replace(/<br\s*[\/]?>/gi, ""));
    setEditHistory(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setDef(e.target.value);
  };

  useEffect(() => {
    if (def === "layout-1") {
      setDesign(1);
      setStyles(layout1);
    } else if (def === "layout-2") {
      setDesign(2);
      setStyles(layout2);
    } else if (def === "layout-3") {
      setDesign(3);
      setStyles(layout2);
    } else if (def === "layout-4") {
      setDesign(4);

      setStyles(layout1);
    }
  }, [def]);

  return (
    <>
<<<<<<< HEAD
      <div className={styles.root}>
        <Paper className={styles.paper} elevation={0}>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", justifyContent: "left" }}
          >
            <>
              {!editTitle && auth.is_superuser ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <EditButton
                    onClick={handleSnackOpen}
                    editState={editTitle}
                    position="end"
                  />
                </div>
              ) : null}
              {!editTitle ? (
                <Heading data={data} />
              ) : (
                <Grid item xs={12} sm={12}>
                  <AboutHeadingEdit
                    aboutBlock={data}
                    onUpdate={updateBlock}
                    handleCancel={onCancel}
                  />
                </Grid>
              )}
              {editModeSnack && (
                <AdvancedSnackbar
                  onClose={handleSnackClose}
                  duration="3000"
                  position={laySnack}
                  open={openSnack}
                  message={messageSnack}
                  type={typeSnack}
                />
              )}
              {successModeSnack && (
                <AdvancedSnackbar
                  onClose={handleSnackClose}
                  duration="3000"
                  position={"top-center"}
                  open={true}
                  message={messageSnack}
                  type={"success"}
                />
              )}
              {cancelModeSnack && (
                <AdvancedSnackbar
                  onClose={handleSnackClose}
                  duration="3000"
                  position={laySnack}
                  open={openSnack}
                  message={messageSnack}
                  type={typeSnack}
                />
              )}
            </>
            <Select value={def} onChange={handleChange}>
              <option value="layout-1">Layout 1</option>
              <option value="layout-2">Layout 2</option>
              <option value="layout-3">Layout 3</option>
              <option value="layout-4">Layout 4</option>
            </Select>
            {design === 1 && missionData && (
              <>
                <ContentSection
                  title={missionData.title}
                  body={missionBody}
                  editState={editMission}
                  setEdit={setEditMission}
                  onUpdate={updateMission}
                  type={"missionstatement"}
                  auth={auth}
                />
                <ContentSection
                  title={historyData.title}
                  body={historyBody}
                  editState={editHistory}
                  setEdit={setEditHistory}
                  onUpdate={updateHistory}
                  type={"companyhistory"}
                  auth={auth}
                />
                <Grid item xs={12} sm={12} className={styles.section}>
                  {valuesData ? <Values valuesData={valuesData} /> : null}
                </Grid>
              </>
            )}
            {design === 2 && missionData && (
              <>
                <div className={styles.aboutRow}>
                  <ContentSection
                    title={missionData.title}
                    body={missionBody}
                    editState={editMission}
                    setEdit={setEditMission}
                    onUpdate={updateMission}
                    type={"missionstatement"}
                    auth={auth}
                  />
                  <img
                    className={styles.image}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wa5d1VFclZ6hFCnC1WEfDAHaE8%26pid%3DApi&f=1&ipt=a13a8029008208845a264275170e1d85c5fa1cdab7dfe30097d601ddf9211a94&ipo=images"
                    alt=""
                  />
                </div>
                <div className={styles.aboutRow}>
                  <img
                    className={styles.image}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wa5d1VFclZ6hFCnC1WEfDAHaE8%26pid%3DApi&f=1&ipt=a13a8029008208845a264275170e1d85c5fa1cdab7dfe30097d601ddf9211a94&ipo=images"
                    alt=""
                  />

                  <ContentSection
                    title={historyData.title}
                    body={historyBody}
                    editState={editHistory}
                    setEdit={setEditHistory}
                    onUpdate={updateHistory}
                    type={"companyhistory"}
                    auth={auth}
                  />
                </div>

                <Grid item xs={12} sm={12} className={styles.section}>
                  {valuesData ? <Values valuesData={valuesData} /> : null}
                </Grid>
              </>
            )}
            {design === 3 && missionData && (
              <>
                <Grid item xs={12} sm={12} className={styles.section}>
                  {valuesData ? <Values valuesData={valuesData} /> : null}
                </Grid>
                <div className={styles.aboutRow}>
                  <ContentSection
                    title={missionData.title}
                    body={missionBody}
                    editState={editMission}
                    setEdit={setEditMission}
                    onUpdate={updateMission}
                    type={"missionstatement"}
                    auth={auth}
                  />
                  <img
                    className={styles.image}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wa5d1VFclZ6hFCnC1WEfDAHaE8%26pid%3DApi&f=1&ipt=a13a8029008208845a264275170e1d85c5fa1cdab7dfe30097d601ddf9211a94&ipo=images"
                    alt=""
                  />
                </div>
                <div className={styles.aboutRow}>
                  <img
                    className={styles.image}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wa5d1VFclZ6hFCnC1WEfDAHaE8%26pid%3DApi&f=1&ipt=a13a8029008208845a264275170e1d85c5fa1cdab7dfe30097d601ddf9211a94&ipo=images"
                    alt=""
                  />
                  <ContentSection
                    title={historyData.title}
                    body={historyBody}
                    editState={editHistory}
                    setEdit={setEditHistory}
                    onUpdate={updateHistory}
                    type={"companyhistory"}
                    auth={auth}
                  />
                </div>
              </>
            )}
            {design === 4 && missionData && (
              <>
                <Grid item xs={12} sm={12} className={styles.section}>
                  {valuesData ? <Values valuesData={valuesData} /> : null}
                </Grid>
                <ContentSection
                  title={missionData.title}
                  body={missionBody}
                  editState={editMission}
                  setEdit={setEditMission}
                  onUpdate={updateMission}
                  type={"missionstatement"}
                  auth={auth}
                />
                <ContentSection
                  title={historyData.title}
                  body={historyBody}
                  editState={editHistory}
                  setEdit={setEditHistory}
                  onUpdate={updateHistory}
                  type={"companyhistory"}
                  auth={auth}
                />
=======
      {missionData && (
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={2} className={classes.gridContainer}>
              <>
                {!editTitle && auth.is_superuser ? (
                  <Container justify="flex-end">
                    <EditDeleteButtonMenu
                      hideDelete
                      editClick={() => setEditTitle(!editTitle)}
                      position="end"
                      placement="bottom"
                    />
                  </Container>
                ) : null}
                {!editTitle ? (
                  <Heading data={data} />
                ) : (
                  <Grid item xs={12} sm={12}>
                    <AboutHeadingEdit
                      aboutBlock={data}
                      onUpdate={updateBlock}
                      handleCancel={() => setEditTitle(!editTitle)}
                    />
                  </Grid>
                )}
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
              </>
            )}
          </Grid>
        </Paper>
      </div>
    </>
  );
}
