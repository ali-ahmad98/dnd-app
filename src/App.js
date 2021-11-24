import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

/**
 * This layout demonstrates how to use the `onResize` handler to enforce a min/max width and height.
 *
 * In this grid, all elements are allowed a max width of 2 if the height < 3,
 * and a min width of 2 if the height >= 3.
 */

const Test = (props) => {
  const [data1, setData] = useState({
    EmpData: [
      {
        empId: 11,
        data: [
          {
            firstName: "Steve",
            lastName: "Smith"
          },
          {
            firstName: "Michel",
            lastName: "Muner"
          }
        ]
      },
      {
        empId: 12,
        lay1: { i: "b" },
        data: [
          {
            firstName: "Charles",
            lastName: "Johnsen"
          },
          {
            firstName: "Glen",
            lastName: "Tyson"
          }
        ]
      },
      {
        empId: 13,
        lay1: { i: "c" },
        data: [
          {
            firstName: "Steve",
            lastName: "Smith"
          },
          {
            firstName: "Michel",
            lastName: "Muner"
          }
        ]
      },
      {
        empId: 14,
        lay1: { i: "d" },
        data: [
          {
            firstName: "Steve",
            lastName: "Smith"
          },
          {
            firstName: "Michel",
            lastName: "Muner"
          }
        ]
      },
      {
        empId: 14,
        lay1: { i: "e" },
        data: [
          {
            firstName: "Steve",
            lastName: "Smith"
          },
          {
            firstName: "Michel",
            lastName: "Muner"
          }
        ]
      }
    ]
  });
  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = generateLayout();
    return _.map(layout, function (l) {
      return (
        <div key={l.i} data-grid={l} className="bg-success">
          <>
            <div className="rounded" key="?"></div>
            {data1.EmpData[l.i].data.map((l) => (
              <>
                <div>{l.firstName}</div>
                <div>{l.lastName}</div>
              </>
            ))}
          </>
        </div>
      );
    });
  };
  const generateLayout = () => {
    const p = data1 || []; //props;
    return p.EmpData.map(function (item, i) {
      const w = 2; //_.random(2, 4);
      const h = 3; //_.random(2, 4);
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6),
        w: w,
        h: h,
        i: i.toString()
      };
    });
  };

  const onLayoutChange = (layout) => {
    props.onLayoutChange(layout);
  };

  const clickHandler = () => {
    const newData = {
      EmpData: [
        ...data1.EmpData,
        {
          ...data1.EmpData[data1.EmpData.length - 1],
          empId: data1.EmpData[data1.EmpData.length - 1].empId + 1
        }
      ]
    };
    setData(newData);
  };

  return (
    <>
      <button onClick={clickHandler}>+ Item</button>
      <ReactGridLayout onLayoutChange={onLayoutChange} {...props}>
        {generateDOM()}
      </ReactGridLayout>
    </>
  );
};
Test.defaultProps = {
  isDraggable: true,
  isResizable: true,
  items: 20,
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: 12
};
export default Test;
