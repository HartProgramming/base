import Demo from "../../Elements/Demo/Demo";
import FeatureCTA from "../Features/FeatureCTA/FeatureCTA";
import Partners from "../Partners/Partners";
import HelpText from "../../Builders/Parts/Text/HelpText";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import Poll from "../../Poll/Poll";
import InteractiveInfo from "../InteractiveInfo/Interactive";
import TableBuilder from "../../Builders/Tables/TableBuilder";
import ListBuilder from "../../Builders/Lists/ListBuilder";
import FAQBuilder from "../../Builders/FAQs/FAQBuilder";
import TaskListBuilder from "../../Builders/TaskList/TaskListBuilder";
import DemoItem from "../../Elements/Demo/DemoItem";
import CardBuilder from "../../Builders/Cards/CardBuilder";
import ElementSetBuilder from "../../Builders/ElementSet/ElementSetBuilder";
import Poll from "../../Builders/Poll/Poll";
import Pollv2 from "../../Builders/Poll/Pollv2";

const wipComponents = [

  {
    component: Info,
  },
  {
    component: InteractiveInfo,
  },
  {
    component: FeatureCTA,
    title: "FeatureCTA",
  },
  {
    component: Partners,
    title: "Partners",
  },
  {
    component: Poll,
  }
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
        <Pollv2 />
      </div>
      <div style={{ paddingTop: 0, marginBottom: 48 }}>
        <Poll />
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
