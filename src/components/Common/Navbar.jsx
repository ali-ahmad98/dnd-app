import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSelectedPanel } from "../../actions";
import { useLocation } from "react-router-dom";
import { panelsData } from "./Panels/PanelsData";

// Import Antd
import { Menu, Select } from "antd";

// Local Variables
const options = [];
const panels = panelsData;

// Main Component: Navbar
const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedPanel_, setSelectedPanel] = useState(panels);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        dispatch(addSelectedPanel(panels));
        return;
      case "/page2":
        dispatch(addSelectedPanel(panels.slice(2, 4)));
        return;

      default:
        return;
    }
  }, [location.pathname]);

  for (let i = 0; i < panels.length; i++) {
    options.push({
      label: panels[i].name,
      value: panels[i].name,
    });
  }
  const onSelectHandler = (data) => {
    const modArray1 = panels.filter((sp) => sp.name === data);
    setSelectedPanel([...selectedPanel_, modArray1[0]]);
    dispatch(addSelectedPanel([...selectedPanel_, modArray1[0]]));
    //  setSelectedPanel(modArray);
    console.log("Deselected", data, modArray1);
  };
  const onDeSelectHandler = (data) => {
    const modArray = selectedPanel_.filter((sp) => sp.name !== data);
    setSelectedPanel(modArray);
    dispatch(addSelectedPanel(modArray));
    console.log("Deselected", data, modArray);
  };
  const selectProps = {
    mode: "multiple",
    style: {
      width: "250px",
    },
    options,
    onSelect: (newValue) => {
      onSelectHandler(newValue);
    },
    onDeselect: (newValue) => {
      onDeSelectHandler(newValue);
    },
    placeholder: "Select Item...",
    maxTagCount: "responsive",
  };
  const getDefaultSelected = (op) => {
    console.log(op);
    return op.map((od) => od.value);
  };

  return (
    <div>
      <div style={{ float: "left", width: "50%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key={"1"}>
            <Link to="/">Trade Blotter</Link>
          </Menu.Item>
          <Menu.Item key={"2"}>
            <Link to="/page2">Page2</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ float: "right" }}>
        <Select
          defaultValue={() => getDefaultSelected(options)}
          {...selectProps}
        />
      </div>
    </div>
  );
};

export default Navbar;
