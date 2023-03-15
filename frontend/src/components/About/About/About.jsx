import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Values from "../Values/Values";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import AboutHeadingEdit from "../Heading/AboutHeadingEdit";
import Heading from "../Heading/Heading";
import ContentSection from "../Content/ContentSection";
import useInput from "../../../hooks/useInput";
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
  const [metadata, setMetaData] = useState({});
  const [historyData, setHistoryData] = useState([]);
  const [valuesData, setValuesData] = useState(null);

  const [editTitle, setEditTitle] = useState(false);
  const [editMission, setEditMission] = useState(false);
  const [editHistory, setEditHistory] = useState(false);
  const [missionBody, setMissionBody] = useState(false);
  const [historyBody, setHistoryBody] = useState(false);
  const dispatch = useDispatch();

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
              </>
          
          </Grid>
        </Paper>
      </div>
      )}
    </>
  )}
                
