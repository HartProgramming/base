import React, { useState } from "react";
import { CardContent, Card } from "@material-ui/core";
import PricingEdit from "./PricingEdit";
import { useSelector } from "react-redux";
import CardHead from "./CardHead";
import CardList from "./CardList";
import CardButtons from "./CardButtons";
<<<<<<< HEAD
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
=======
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

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
          <CardContent style={{ padding: "0px 8px 0px 8px" }}>
            <CardList data={planData} classes={classes} />
            <CardButtons plan={planData} />
          </CardContent>
          {!editing && auth.is_superuser ? (
            <>
              <EditDeleteButtonMenu
                editClick={() => setEditing(!editing)}
                hideDelete
                position="end"
              />
            </>
          ) : null}
        </Card>
      ) : (
        <PricingEdit
          updatePlan={updatePlan}
          plan={planData}
          handleCancel={() => setEditing(!editing)}
        />
      )}
<<<<<<< HEAD

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
=======
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
    </div>
  );
}
