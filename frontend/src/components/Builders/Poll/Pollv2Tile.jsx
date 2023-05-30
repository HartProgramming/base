import Flexer from "../../Elements/Layout/Container/Flexer";
import HelpText from "../Parts/Text/HelpText";

<<<<<<< HEAD

export default function Pollv2Tile({ style, options, type }) {

    const handleVote = (e) => {

    }

    const onSubmit = (e) => {

    }
=======
export default function Pollv2Tile({ style, options, type }) {
  const handleVote = (e) => {};

  const onSubmit = (e) => {};
>>>>>>> 4136e8a30da2bed41699941e5d3d128c5ff4a642

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
        <form>
<<<<<<< HEAD
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', border: '1px solid blue', width: '100%', justifyContent: 'center'}}>
=======
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              border: "1px solid blue",
              width: "100%",
              justifyContent: "center",
            }}
          >
>>>>>>> 4136e8a30da2bed41699941e5d3d128c5ff4a642
            {options.map((option) => {
              return (
                <Flexer w="100%" fd="row" a="center">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <input
                      name="vote"
                      onChange={handleVote}
                      type={type === "Single" ? "radio" : "checkbox"}
                      value={option}
                    />
<<<<<<< HEAD
                    <button name='vote'>
                        
                    </button>
=======
                    <button name="vote"></button>
>>>>>>> 4136e8a30da2bed41699941e5d3d128c5ff4a642
                    <HelpText>{option}</HelpText>
                  </span>
                </Flexer>
              );
            })}
          </div>
        </form>
      )}
    </>
  );
}
