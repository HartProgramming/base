import { useEffect, useState } from "react";
import Flexer from "../../Elements/Layout/Container/Flexer";
import HelpText from "../Parts/Text/HelpText";
import { handleDataChange } from "../../../utils/dataHandlers/dataHandlers";
export default function Pollv2List({ style, options, type, vote }) {
  const [voteSelected, setVoteSelected] = useState();
  const [multArr, setMultArr] = useState([]);
  const [single, setSingle] = useState();
  const [voteData, setVoteData] = useState();

  const handleVote = (e) => {
    let voteDetails = {
      single: "",
      multiple: "",
    };
    setSingle(e.target.value);
    if (type === "Single") {
      setSingle(e.target.value);
      setVoteData({ single: e.target.value, multiple: null });
    } else if (e.target.checked === true) {
      console.log(e.target.value);
      setMultArr((prev) => [e.target.value, ...prev]);
      setVoteData({ single: null, multiple: multArr });
      console.log(multArr);
    } else if (e.target.checked === false) {
      console.log(e.target.value);
      
      setVoteData({ single: null, multiple: multArr });
      console.log(multArr);
    }
  };

  useEffect(() => {
    if (type === "Single") {
      vote({ single: single, multiple: null });
      console.log(voteData);
      console.log(single);
    } else {
      vote({ single: null, multiple: multArr });
      console.log(multArr);
    }
  }, [single, multArr, voteData]);

  return (
    <>
      {style === "None" && (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            listStyle: "none",
          }}
        >
          {options.map((option) => {
            return (
              <>
                <Flexer w="100%" fd="row" a="center">
                  <li>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <input
                        name="vote"
                        onChange={handleVote}
                        type={type === "Single" ? "radio" : "checkbox"}
                        value={option}
                      />
                      <HelpText>{option}</HelpText>
                    </span>
                  </li>
                </Flexer>
              </>
            );
          })}
        </ul>
      )}
      {style === "Numbered" && (
        <form>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {options.map((option) => {
              return (
                <Flexer w="100%" fd="row" a="center">
                  <li>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <input
                        name="vote"
                        onChange={handleVote}
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
        </form>
      )}
      {style === "Alphabetical" && (
        <form>
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
                        name="vote"
                        onChange={handleVote}
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
        </form>
      )}
    </>
  );
}
