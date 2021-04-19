import { mergeStyleSets } from "@fluentui/merge-styles";

export default mergeStyleSets({
  root: {
    background: "salmon",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "500px",
    height: "500px",
    padding: "5px 20px 20px 20px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    boxShadow: "-20px -20px 0px 0px #fb968b",
    borderRadius: "10px",
  },
  container: {
    margin: "auto",
    display: "grid",
    gridGap: "15px",
  },
});
