// Import Components
import TradeBookingPanel from "./TradeBookingPanel/TradeBookingPanel";
import SecurityInfoPanel from "./SecurityInfoPanel/SecurityInfoPanel";
import TradeBrowserPanel from "./TradeBrowserPanel/TradeBrowserPanel";
import CounterPartyPanel from "./CounterPartyPanel/CounterPartyPanel";

export const panelsData = [
  {
    name: "Trade Booking",
    component: <TradeBookingPanel />,
    width: 7.5,
    height: 7,
  },
  {
    name: "Security Info",
    component: <SecurityInfoPanel />,
    width: 4.5,
    height: 7,
  },
  {
    name: "Trade Browser",
    component: <TradeBrowserPanel />,
    width: 7.5,
    height: 7,
  },
  {
    name: "Counter Party",
    component: <CounterPartyPanel />,
    width: 4.5,
    height: 7,
  },
];
