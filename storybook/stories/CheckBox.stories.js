import React from "react";
import { NdsStyles } from "./decorators/decorators";
import { CheckBox, Button, Modal } from "design_system";

export default {
  title: "Components/Check",
  decorators: [NdsStyles],
};

export const CHECK = () => {
  const [checkData, setCheckData] = React.useState({cb1: true, cb2: false, cb3: false});
  const [modalOpen, setModalOpen] = React.useState(false);
  function  handleCheck(event) {
    console.log(event.target.name, event.target.checked);
    checkData[event.target.name] = event.target.checked;
    setCheckData(checkData);
  }
  return (
    <div>
      <CheckBox
        label="CB1"
        id={1}
        name="cb1"
        defaultChecked={checkData.cb1}
        onChange={handleCheck}
      />
      <CheckBox
        label="CB2"
        id={1}
        name="cb2"
        defaultChecked={checkData.cb2}
        onChange={handleCheck}
      />
      <CheckBox
        label="CB3"
        id={1}
        name="cb3"
        defaultChecked={checkData.cb3}
        onChange={handleCheck}
      />
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Submit
      </Button>
      <Modal
        open={modalOpen}
        header={"HEADER"}
        handleClose={() => {
          setModalOpen(false);
        }}
      >
        <div style={{ width: "500px" }}>
          {Object.keys(checkData).map((key)=><div style={{paddingBottom:"12px", display:"flex", alignItems: "center"}}>{key}:{ <span className="narmi-icon-solid-circle" style={{paddingLeft:"12px", color: checkData[key] ? "green" : "red"}}/> }</div>)}
        </div>
      </Modal>
    </div>
  );
};
