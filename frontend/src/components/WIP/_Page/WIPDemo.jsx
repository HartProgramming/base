import Demo from "../../Elements/Demo/Demo";
import FeatureCTA from "../Features/FeatureCTA/FeatureCTA";
import Partners from "../Partners/Partners";
<<<<<<< HEAD
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import InteractiveInfo from "../InteractiveInfo/Interactive";
=======
import { useTheme } from "@material-ui/core";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 88470787f1c1d7d835059892c0ca11d42b7547dc
import LayeredGradientBackground from "../../Elements/Layout/GradientContent";
import { useState } from "react";
import Loading from "../../Elements/Layout/Loading/Loading";
import TableBuilder from "../../Builders/Tables/TableBuilder";
import ListBuilder from "../../Builders/Lists/ListBuilder";
import FAQBuilder from "../../Builders/FAQs/FAQBuilder";
import TaskListBuilder from "../../Builders/TaskList/TaskListBuilder";
import DemoItem from "../../Elements/Demo/DemoItem";
import CardBuilder from "../../Builders/Cards/CardBuilder";
import ElementSetBuilder from "../../Builders/ElementSet/ElementSetBuilder";

const wipComponents = [
  
<<<<<<< HEAD
=======
=======
>>>>>>> ca6f24797eb451333df09fd8b2bc82f00b72e1b6
import StoryTeller from "../StoryTeller/StoryTeller";
import CaseStudiesBasic from "../CaseStudies/CaseStudiesBasic";
import Reviews from "../Reviews/Reviews";
import Infographic from "../Infographic/Infographic";
import Magazine from "../Magazine/Magazine";
import TestForm from "../TestForm";
import LayeredGradientBackground from "../../Elements/Layout/GradientContent";
import { useState } from "react";
import Loading from "../../Elements/Layout/Loading/Loading";
<<<<<<< HEAD
import Info from "../Info/Info";
const actions = [
  <Grid
    container
    flex
    spacing={0}
    justifyContent="space-between"
    alignItems="center"
  >
    <Typography variant="subtitle2">By: Admin</Typography>
    <Button key="2" size="small" variant="contained" color="primary">
      More
    </Button>
  </Grid>,
];
=======
import TableBuilder from "../../Tables/Builder/TableBuilder";
>>>>>>> ca6f24797eb451333df09fd8b2bc82f00b72e1b6

const salesData = [
  { label: "Jan", value: 2486 },
  { label: "Feb", value: 3199 },
  { label: "Mar", value: 3011 },
  { label: "Apr", value: 4111 },
  { label: "May", value: 3567 },
  { label: "Jun", value: 5367 },
];

const customersData = [
  { label: "John", value: 5 },
  { label: "Sarah", value: 7 },
  { label: "Tom", value: 4 },
  { label: "Mary", value: 9 },
  { label: "Bob", value: 2 },
  { label: "Lisa", value: 11 },
];

const wipComponents = [
  {
    component: Magazine,
    props: {
      showStudies: true,
    },
  },
>>>>>>> 88470787f1c1d7d835059892c0ca11d42b7547dc
  {
    component: Info,
  },
  {
    component: InteractiveInfo,
  },
  {
    component: Infographic,
    props: {
      salesTitle: "Sales",
      salesDescription:
        "Lorem ipsum dolorr sit amet, consectetur adipiscing elit. Sed euismod, est eget pellentesque pulvinar.",
      salesData: salesData,
      customersTitle: "Customers",
      customersDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, est eget pellentesque pulvinar.",
      customersData: customersData,
      mapTitle: "Location",
      mapDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, est eget pellentesque pulvinar.",
      ctaText: "Learn More",
      ctaHref: "https://www.example.com",
      progressTitle: "Progress",
      progressDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, est eget pellentesque pulvinar.",
      progressSubtitle1: "Goal 1",
      progressValue1: 60,
      progressSubtitle2: "Goal 2",
      progressValue2: 80,
      progressComplete: false,
      progressCompleteMessage: "Congratulations! You've reached your goals!",
    },
  },
  {
    component: Reviews,
  },
  {
    component: StoryTeller,
  },
  {
    component: CaseStudiesBasic,
  },
>>>>>>> afe37eda190a61eabdd878f103515363b222827f
  {
    component: FeatureCTA,
    title: "FeatureCTA",
  },
  {
    component: Partners,
    title: "Partners",
  },
];

export default function WIPDemo() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div>
        <Loading loading={loading} message={"Tits?"} />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "100vw", background: theme.palette.primary.main }}>
      <div style={{ paddingTop: 0, marginBottom: 48 }}>
        <ElementSetBuilder />
      </div>
      <div style={{ paddingTop: 0, marginBottom: 48 }}>
        <DemoItem item="avatar-list" />
      </div>
      <div style={{ paddingTop: 0, marginBottom: 48 }}>
        <TaskListBuilder />
      </div>
      <div style={{ paddingTop: 48, marginBottom: 48 }}>
        <FAQBuilder />
      </div>
      <div style={{ paddingTop: 48, marginBottom: 48 }}>
        <CardBuilder />
      </div>
      <div style={{ paddingTop: 48, marginBottom: 48 }}>
        <ListBuilder />
      </div>
      <div style={{ paddingTop: 48, marginBottom: 48 }}>
        <TableBuilder />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          background: theme.palette.primary.main,
        }}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
        >
          <path
            fill={theme.palette.primary.light}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          />
        </svg>
      </div>
      <LayeredGradientBackground></LayeredGradientBackground>

      <Demo demoTitle="WIP Components" components={wipComponents} />
    </div>
  );
}
