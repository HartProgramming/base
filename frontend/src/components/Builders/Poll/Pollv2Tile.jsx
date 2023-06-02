import { useEffect, useState } from "react";
import Flexer from "../../Elements/Layout/Container/Flexer";
import HelpText from "../Parts/Text/HelpText";

export default function Pollv2Tile({ style, options, type }) {
  const [buttonColor, setButtonColor] = useState(null);
  const [voteArr, setVoteArr] = useState([]);

  const handleVote = (e) => {
    console.log(e.target);
    if (type === "Multiple") {
      if (e.target.style.backgroundColor !== "blue") {
        setButtonColor((e.target.style.backgroundColor = "blue"));
        setVoteArr((vote) => [...vote, e.target.value]);
      } else {
        setButtonColor((e.target.style.backgroundColor = "white"));
        setVoteArr(
          voteArr.filter((vote) => {
            return vote !== e.target.value;
          })
        );
      }
    }
  };

  useEffect(() => {
    console.log(voteArr);
  }, [voteArr]);

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      {style === "Rectangle" && (
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
      {style === "Square" && (
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid blue",
            width: "100%",
            margin: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          onSubmit={onSubmit}
        >
          {options.map((option) => {
            return (
              <input
                name="vote"
                onClick={handleVote}
                type="button"
                value={option}
                style={{
                  height: "100px",
                  width: "140px",
                  fontWeight: 600,
                }}
              />
            );
          })}
        </form>
      )}
    </>
  );
}
