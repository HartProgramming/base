import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Values from "../Values/Values";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import { useSelector } from "react-redux";
import EditButton from "../../Elements/Buttons/EditButton";
import AboutHeadingEdit from "../Heading/AboutHeadingEdit";
import Heading from "../Heading/Heading";
import ContentSection from "../Content/ContentSection";
import useInput from "../../../hooks/useInput";
import { AboutStyles1, AboutStyles2 } from "./AboutStyles";
import { Select } from "@material-ui/core";
export default function About() {
  const {
    value: missionData,
    handleChange: handleChangeMission,
    setValue: setMissionData,
  } = useInput([]);
  const auth = useSelector((state) => state.auth);
  const layout1 = AboutStyles1();
  const layout2 = AboutStyles2();
  const [data, setData] = useState([]);

  // const [missionData, setMissionData] = useState([]);

  const [historyData, setHistoryData] = useState([]);
  const [valuesData, setValuesData] = useState(null);

  const [editTitle, setEditTitle] = useState(false);
  const [editMission, setEditMission] = useState(false);
  const [editHistory, setEditHistory] = useState(false);
  const [missionBody, setMissionBody] = useState(false);
  const [historyBody, setHistoryBody] = useState(false);
  const [def, setDef] = useState("layout-1");
  const [design, setDesign] = useState(4);
  const [styles, setStyles] = useState(layout1);

  useEffect(() => {
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
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const updateBlock = (updateBlock) => {
    setData(updateBlock);
    setEditTitle(false);
  };
  const updateMission = (updateMission) => {
    setMissionData(updateMission);
    setMissionBody(updateMission.body.replace(/<br\s*[\/]?>/gi, ""));
    setEditMission(false);
  };
  const updateHistory = (updateHistory) => {
    setHistoryData(updateHistory);
    setHistoryBody(updateHistory.body.replace(/<br\s*[\/]?>/gi, ""));
    setEditHistory(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value)
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
                    onClick={() => setEditTitle(!editTitle)}
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
                    handleCancel={() => setEditTitle(!editTitle)}
                  />
                </Grid>
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
              </>
            )}
          </Grid>
        </Paper>
      </div>
    </>
  );
}
