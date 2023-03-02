import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import axiosInstance from "../../../../lib/Axios/axiosInstance";
import BaseForm from "../../../Elements/Base/BaseForm";
import getByType from "./getByType";
import { useLocation, useNavigate } from "react-router-dom";
import StyledButton from "../../../Elements/Buttons/StyledButton";
import Loading from "../../../Elements/Layout/Loading";

const AutoForm = ({ endpointUrl, data = {}, handleUpdate }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [formData, setFormData] = useState(data);
  const [modelMetadata, setModelMetadata] = useState({});
  const [fieldMetadata, setFieldMetadata] = useState({});
  // const [url, setUrl] = useState([]);
  // const [keys, setKeys] = useState([]);
  // const [appName, setAppName] = useState([]);
  // const [model, setModel] = useState([]);
  // const [metadata, setMetadata] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [newImageName, setNewImageName] = useState(null);
  const [ready, setReady] = useState(false);
  const location = useLocation();
  let url, keys, appName, model, metadata;
  console.log("testerearasdsa", location.state);

  if (!location.state) {
    axiosInstance
      .get(`/get_models${endpointUrl}`)
      .then((response) => {
        console.log(response.data);
        ({ url, keys, appName, model, metadata } = data);
      })
      .catch((error) => console.log(error));
  } else {
    ({ url, keys, appName, model, metadata } = location.state);
  }

  console.log(url);
  console.log(keys);
  console.log(appName);
  console.log(model);
  console.log(metadata);

  useEffect(() => {
    axiosInstance.get(`/get_metadata${endpointUrl}`).then((response) => {
      setFieldMetadata(response.data.fields);
      setModelMetadata(response.data);
      console.log("alphabear: ", response.data);
      setReady(true);
    });

    // if (!location.state) {
    //   axiosInstance
    //     .get(`/get_models${endpointUrl}`)
    //     .then((response) => {
    //       print(response.data[modelMetadata.modelName]);
    //       setModel(response.data[modelMetadata.modelName]);

    //     })
    //     .catch((error) => console.log(error));
    // } else {
    //   let { url, keys, appName, model, metadata } = location.state;
    // }
  }, []);

  const handleImageChange = (event) => {
    formData.image = event.target.files[0];
    setNewImage(URL.createObjectURL(event.target.files[0]));
    setNewImageName(event.target.files[0].name);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleQuillChange = (fieldName, fieldValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }));
  };

  const handleManyToManyChange = (fieldName, fieldValue) => {
    if (fieldName === "features" || fieldName === "supported_sites") {
      const newFeatures = formData[fieldName] ? [...formData[fieldName]] : [];
      newFeatures.push({ detail: fieldValue });
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: newFeatures,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: fieldValue,
      }));
    }
  };

  const routeBackToModel = () => {
    navigate(`/admin/${model.model_name}/`, {
      state: {
        url: url,
        keys: keys,
        appName: appName,
        model: model,
        metadata: metadata,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const formDataWithoutId = {};
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "id") {
        formDataWithoutId[key] = value;
      }
    }

    if (Object.keys(data).length === 0) {
      try {
        const response = await axiosInstance.post(
          endpointUrl,
          formDataWithoutId,
          config
        );
        routeBackToModel();
        handleUpdate();
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.patch(
          `${endpointUrl}${data.id}/`,
          formDataWithoutId,
          config
        );
        routeBackToModel();
        handleUpdate();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {ready ? (
        <BaseForm
          handleSubmit={handleSubmit}
          maxWidth={800}
          minHeight={isSmallScreen ? 400 : 600}
          title={modelMetadata.verboseName}
          background="#F5F5F5"
        >
          <Grid container justifyContent="center">
            {fieldMetadata &&
              Object.keys(fieldMetadata).map((fieldName) => {
                if (
                  fieldName === "id" ||
                  fieldName === "created_at" ||
                  fieldName === "updated_at" ||
                  fieldName === "last_login" ||
                  fieldName === "date_joined" ||
                  fieldName === "password"
                ) {
                  return null;
                }

                const {
                  type,
                  choices,
                  xs_column_count,
                  md_column_count,
                  justify,
                  markdown,
                } = fieldMetadata[fieldName];

                console.log("markdown: ", markdown);

                const { verbose_name } = metadata[fieldName];

                const inputElement = getByType(
                  fieldName,
                  verbose_name,
                  type,
                  handleInputChange,
                  choices,
                  formData,
                  setFormData,
                  handleManyToManyChange,
                  handleImageChange,
                  handleQuillChange,
                  newImage,
                  newImageName,
                  xs_column_count,
                  md_column_count,
                  justify,
                  markdown
                );

                if (inputElement) {
                  return inputElement;
                }

                return null;
              })}
          </Grid>
          <Grid container justifyContent="center" style={{ marginTop: 16 }}>
            <StyledButton
              buttonText={Object.keys(data).length === 0 ? "Create" : "Update"}
              minWidth={80}
              color="primary"
              type="submit"
            >
              {Object.keys(data).length === 0 ? "Create" : "Update"}
            </StyledButton>
            <StyledButton
              buttonText={"Cancel"}
              color="primary"
              onClick={routeBackToModel}
              minWidth={80}
            />
          </Grid>
        </BaseForm>
      ) : (
        <Loading loading={true} />
      )}
    </>
  );
};

AutoForm.propTypes = {
  endpointUrl: PropTypes.string.isRequired, // API Endpoint Route
  data: PropTypes.object, // Optional Data Object for Editing
  onClose: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default AutoForm;
