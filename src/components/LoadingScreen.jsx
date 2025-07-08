import React from "react";
import { Commet } from "react-loading-indicators";

const LoadingScreen = () => {
  return (
    <div style={styles.overlay}>
      <Commet color="#ffffff" size="medium" text="" textColor="#000000" />
    </div>
  );
};

const styles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loader: {
    fontSize: "2rem",
    color: "white",
  },
};

export default LoadingScreen;
