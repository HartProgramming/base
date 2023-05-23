import { useEffect, useState } from "react";
import Flexer from "../../Elements/Layout/Container/Flexer";
import HelpText from "../Parts/Text/HelpText";
export default function Pollv2List({ style, options, type, vote }) {
  const [voteSelected, setVoteSelected] = useState();
  const [multArr, setMultArr] = useState();
  const [single, setSingle] = useState();
  
  
  useEffect(() => {
    let voteInfo = {
      single: single,
      multiple: multArr
    }
  }, [single, multArr])
  

  const handleVote = (e) => {
    console.log(e.target.value);
    if (type === "Single") {
      setSingle(e.target.value);
      vote = single;
      console.log(single);
    } else {
      setVoteSelected(e.target.value);
      setMultArr([voteSelected]);
      console.log(voteSelected);
      console.log(arr);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(voteInfo)
  }

  return (
    <>
      {style === "None" && (
        <form onSubmit={onSubmit} action="">
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
        </form>
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
