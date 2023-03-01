import { Breadcrumbs, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ContentLayout from "../../Elements/Layout/ContentLayout";
import ControlForm from "../Components/ControlForm/ControlForm";
import { NavigateNext } from "@material-ui/icons";
import BaseContent from "../../Elements/Base/BaseContent";
import UpdateArticleView from "../../Articles/Update/UpdateArticleView";
import ArticleCreate from "./Edit/ArticleCreate";
import axiosInstance from "../../../lib/Axios/axiosInstance";

const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: "#007bff",
  },
}));

function ObjectPage() {
  const classes = useStyles();
  const location = useLocation();
  const { url, keys, appName, model, metadata, id, data } =
    location.state || {};

  const handleCreateFormOpen = () => {
    setCreateFormOpen(true);
  };

  const handleCreateFormClose = () => {
    setCreateFormOpen(false);
  };

  const fetchData = async () => {
    if (url && keys) {
      axiosInstance
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  const handleUpdate = () => {
    fetchData();
  };

  return (
    <ContentLayout
      title="Landing Page"
      description="Where the land be yo."
      keywords="news, posts, articles, touch"
      image="https://example.com/image.png"
      url="https://example.com/example-page"
      backgroundColor="#F5F5F5"
    >
      <BaseContent maxWidth={1200} pt={4} pb={4}>
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            color: "black",
            borderRight: "1px solid #666666",
            marginRight: 16,
            paddingRight: 16,
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
        >
          {model.verbose_name}
        </Typography>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
          style={{ display: "flex" }}
        >
          <Link className={classes.activeLink} to="/admin">
            Home
          </Link>
          <Link
            to={`/admin${url}`}
            state={{
              url: url,
              keys: keys,
              appName: appName,
              model: model,
              metadata: metadata,
              id: id,
            }}
            key={appName}
            className={classes.activeLink}
          >
            {model.verbose_name}
          </Link>
          <Typography color="textPrimary">
            {Array.isArray(id) ? "Creation" : "Update"}
          </Typography>
        </Breadcrumbs>
        {!Array.isArray(id) && !data ? (
          <UpdateArticleView manualId={id} />
        ) : model.verbose_name === "Articles" ? (
          <ArticleCreate />
        ) : !data ? (
          <ControlForm endpointUrl={url} handleUpdate={handleUpdate} />
        ) : (
          <ControlForm
            endpointUrl={url}
            data={data}
            handleUpdate={handleUpdate}
          />
        )}
      </BaseContent>
    </ContentLayout>
  );
}

export default ObjectPage;
