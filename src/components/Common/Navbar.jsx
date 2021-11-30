import React, { useEffect } from "react";
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
    width: 9,
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
    width: 9,
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

  for (let i = 0; i < panels.length; i++) {
    options.push({
      label: panels[i].name,
      value: panels[i].name,
    });
  }

  const selectProps = {
    mode: "multiple",
    style: {
      width: "200px",
    },
    options,
    onSelect: (newValue) => {
      console.log(newValue);
    },
    placeholder: "Select Item...",
    maxTagCount: "responsive",
  };

  useEffect(() => {
    dispatch(addSelectedPanel(panels));
  }, []);

  return (
    <div style={{ float: "right" }}>
      <div>
        <Button
          type="danger"
          onClick={() => dispatch(addSelectedPanel(<TradeBrowserPanel />))}
        >
          Panel-1
        </Button>
        &nbsp; &nbsp;
        <Select {...selectProps} />
      </div>
    </div>
  );
};

export default Navbar;
