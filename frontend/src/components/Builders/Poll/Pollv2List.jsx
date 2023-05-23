import Flexer from "../../Elements/Layout/Container/Flexer";
import HelpText from "../Parts/Text/HelpText";
export default function Pollv2List({ style, options, type }) {
  return (
    <>
      {style === "None" && (
        <ul>
          {options.map((option) => {
            return (
              <Flexer>
                <li style={{borderBottom: '1px solid black'}}>
                  <input
                    type={type === "Single" ? "radio" : "checkbox"}
                    value={option}
                  />
                  <HelpText>{option}</HelpText>
                </li>
              </Flexer>
            );
          })}
        </ul>
      )}
      {style === "Numbered" && (
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {options.map((option) => {
            return (
              <Flexer  w="100%" fd="row" a="center">
                <li >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type={type === "Single" ? "radio" : "checkbox"}
                      value={option}
                    />
                    <HelpText>{option}</HelpText>
                  </span>
                  <hr />
                </li>
              </Flexer>
            );
          })}
        </ol>
      )}
      {style === "Alphabetical" && (
        <ol
          type="A"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {options.map((option) => {
            return (
              <Flexer>
                <li>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type={type === "Single" ? "radio" : "checkbox"}
                      value={option}
                    />
                    <HelpText>{option}</HelpText>
                  </span>
                </li>
              </Flexer>
            );
          })}
        </ol>
      )}
    </>
  );
}
