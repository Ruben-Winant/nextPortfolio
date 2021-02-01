import { FunctionComponent } from "react";
interface props {
  name: string;
  active: boolean;
}

const SkillIcon: FunctionComponent<props> = ({ name, active, children }) => {
  return (
    <div
      style={{
        margin: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
      <span style={{ color: active ? "#ff3347" : "#FFF", marginTop: 5 }}>
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
