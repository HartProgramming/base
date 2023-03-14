import React, { useState } from "react";
import { CardContent, Card } from "@material-ui/core";
import PricingEdit from "./PricingEdit";
import { useSelector } from "react-redux";
import EditButton from "../../Elements/Buttons/EditButton";
import CardHead from "./CardHead";
import CardList from "./CardList";
import CardButtons from "./CardButtons";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";

export default function CardBase({ plan, classes }) {
  const [planData, setPlanData] = useState(plan);
  const [editing, setEditing] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(null)
  const updatePlan = (updatePlan) => {
    setPlanData(updatePlan);
    setEditing(false);
  };

  const handleClose =() => {
    setOpen(false)
    setSuccess(null)
  }

  const handleEdit = () => {
    setEditing(!editing)
    setOpen(true)
    setSuccess('Editing Mode')
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {!editing ? (
        <Card className={classes.pricingCard} key={plan.title}>
          <CardHead plan={planData} classes={classes} />
          <CardContent>
            <CardList data={planData} classes={classes} />
            <CardButtons plan={planData} classes={classes} />
          </CardContent>
        </Card>
      ) : (
        <PricingEdit
          updatePlan={updatePlan}
          plan={planData}
          handleCancel={() => setEditing(!editing)}
        />
      )}

      {!editing && auth.is_superuser ? (
        <>
          <EditButton
            onClick={handleEdit}
            editState={editing}
            mt={0}
            mb={0}
          />
        </>
      ) : null}
      {open && (
        <AdvancedSnackbar
          open={open}
          duration="4000"
          message={success}
          type="info"
          position="top-center"
          onClose={handleClose}
        />
      )}
    </div>
  );
}
