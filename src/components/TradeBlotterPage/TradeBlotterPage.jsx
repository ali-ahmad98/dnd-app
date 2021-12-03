import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
import { useSelector } from "react-redux";

// Import CSS
import classes from "./TradeBlotterPage.module.css";

// Main Component: BookingPage
const BookingPage = (props) => {
  const selectedPanels = useSelector((state) => state.selectedPanels);

  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = generateLayout();
    return _.map(layout, function (l) {
      return (
        <div
          key={l.i}
          data-grid={l}
          className={`${classes.sectionContainer} ${classes.scrollbarStyle}`}
        >
          <div className={classes.section}>{selectedPanels[l.i].component}</div>
        </div>
      );
    });
  };

  const generateLayout = () => {
    const p = selectedPanels || [];
    return p.map(function (item, i) {
      // const w = i % 2 === 0 ? 9 : 3;
      console.log("width is", item.width, typeof item.width);
      // const w = item.width;
      const h = 10;
      return {
        x: item.width === 7.5 ? 0 : 7.5,
        y: Math.floor(i / 6),
        w: item.width,
        h: h,
        i: i.toString(),
      };
    });
  };

  const onLayoutChange = (layout) => {
    props.onLayoutChange(layout);
  };

  return (
    <div className={classes.mainBody}>
      <h1 style={{ textAlign: "center", color: "#40A9FF" }}>Trade Blotter</h1>
      <ReactGridLayout onLayoutChange={onLayoutChange} {...props}>
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
};

BookingPage.defaultProps = {
  isDraggable: true,
  isResizable: true,
  items: 20,
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: 12,
};
export default BookingPage;
