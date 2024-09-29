import React from "react";

interface PanelProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}

const Panel: React.FC<PanelProps> = (props) => {
  const { title, children, isActive, onShow } = props;

  return (
    <section
      style={{
        border: "1px solid #333",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <h3>{title}</h3>

      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
};

export default Panel;
