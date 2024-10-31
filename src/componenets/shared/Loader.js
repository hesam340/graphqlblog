import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop : "20px"
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="grey"
        ariaLabel="tail-spin-loading"
      />
    </div>
  );
}

export default Loader;
