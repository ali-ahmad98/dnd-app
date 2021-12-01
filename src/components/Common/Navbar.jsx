import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedPanel } from "../../actions";

// Import Components
import TradeBookingPanel from "./Panels/TradeBookingPanel";
import SecurityInfoPanel from "./Panels/SecurityInfoPanel";
import TradeBrowserPanel from "./Panels/TradeBrowserPanel";
import CounterPartyPanel from "./Panels/CounterPartyPanel";

// Import Antd
import { Button, Select } from "antd";

// Local Variables
const options = [];
const panels = [
  {
    name: "Trade Booking",
    component: <TradeBookingPanel />,
    width: 8,
    height: 7,
  },
  {
    name: "Security Info",
    component: <SecurityInfoPanel />,
    width: 3,
    height: 7,
  },
  {
    name: "Trade Browser",
    component: <TradeBrowserPanel />,
    width: 8,
    height: 7,
  },
  {
    name: "Counter Party",
    component: <CounterPartyPanel />,
    width: 3,
    height: 7,
  },
];

// Main Component: Navbar
const Navbar = () => {
  const selectedPanels = useSelector((state) => state.selectedPanels);
  const dispatch = useDispatch();
  const [selectedPanel_, setSelectedPanel] = useState(panels);

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
      width: "200px",
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
  useEffect(() => {
    dispatch(addSelectedPanel(panels));
  }, []);

  return (
    <div style={{ float: "right" }}>
      <div>
        {/* <Button
          type="danger"
          onClick={() => dispatch(addSelectedPanel(<TradeBrowserPanel />))}
        >
          Panel-1
        </Button>
        &nbsp; &nbsp; */}
        <Select
          defaultValue={() => getDefaultSelected(options)}
          {...selectProps}
        />
      </div>
    </div>
  );
};

export default Navbar;
