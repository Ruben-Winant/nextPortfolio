import {} from "react";

interface props {
  right?: boolean;
  img: string;
  imgDesc: string;
}

const ScreenshotCard = ({ img, imgDesc, right }: props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: right ? "row-reverse" : "row",
        alignItems: "center",
        color: "white",
        position: "relative",
        marginTop: "3.5%",
        marginBottom: "3.5%",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <img
          src={"/" + img}
          style={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: "100%",
            zIndex: 55555,
          }}
        />
        <div
          style={{
            position: "absolute",
            backgroundColor: "#ff3347",
            width: "100%",
            height: "100%",
            top: "7%",
            left: right ? "" : "7%",
            right: right ? "7%" : "",
            zIndex: 0,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "40%",
          zIndex: 1,
          marginLeft: "7%",
          marginRight: "7%",
          textAlign: right ? "right" : "left",
        }}
      >
        <p>{imgDesc}</p>
      </div>
    </div>
  );
};

export default ScreenshotCard;
