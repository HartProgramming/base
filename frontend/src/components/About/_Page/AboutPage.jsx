import React, { useReducer, useState } from "react";
import FAQAccordion from "../FAQ/FAQAccordion";
import About from "../About/About";
import PageContainer from "../../Elements/Layout/PageContainer";
import FABMenu from "../../Elements/Buttons/FABAdminMenu";
import ErrorPage from "../../Elements/Layout/Errors/ErrorPage";
import { useSelector } from "react-redux";
import snackbarReducer from "../../../lib/Reducers/snackbar";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
import { ALERT_INFO } from "../../../lib/Actions/snackbar";
function AboutPage({ handleUpdate }) {
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const editmode = useSelector((state) => state.editmode);
  const [state, dispatch] = useReducer(snackbarReducer, ALERT_INFO)
  if (error) {
    return (
      <ErrorPage
        message={error.message}
        description={error.description}
        instructions={error.instructions}
        thanks={error.thanks}
      />
    );
  }

  return (
    <PageContainer
      editing={editing}
      setEditing={setEditing}
      backgroundColor="#F5F5F5"
      page_name="About"
    >
      <FABMenu
        editing={editing}
        setEditing={setEditing}
        handleUpdate={handleUpdate}
      />
      <About setError={setError} editMode={editmode.editMode} />
      <FAQAccordion setError={setError} editMode={editmode.editMode} />
    </PageContainer>
  );
}

export default AboutPage;
