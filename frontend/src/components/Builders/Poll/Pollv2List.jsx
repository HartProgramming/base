import { useEffect, useState } from "react";
import Flexer from "../../Elements/Layout/Container/Flexer";
import HelpText from "../Parts/Text/HelpText";
export default function Pollv2List({ style, options, type, vote }) {
  const [voteSelected, setVoteSelected] = useState();
  const [multArr, setMultArr] = useState();
  const [single, setSingle] = useState();
  const [voteData, setVoteData] = useState();

  const handleVote = async (e) => {
      console.log(single, e.target.value)
      if (type === "Single") {
        setSingle(e.target.value);
        console.log(single);
      } else {
        setVoteSelected(e.target.value);
        setMultArr([voteSelected]);
        console.log(voteSelected);
        console.log(arr);
      }   
  };

  useEffect(() => {
    let voteDetails = {
      single: single,
      multiple: multArr,
    };
    setVoteData(voteDetails)
    console.log(voteData);
    vote(voteData)
  }, [single, multArr]);

  return (
    <>
      {style === "None" && (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
