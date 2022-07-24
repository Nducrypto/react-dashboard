import React from "react";

import {
  Page,
  TreeGridComponent,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  ColumnsDirective,
  Filter,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-treegrid";
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../Components";

const Orders = () => {
  return (
    <div className="m-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Orders" category="Page" />

      <TreeGridComponent
        id="gridcom"
        dataSource={ordersData}
        allowPaging="true"
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject
          services={[
            Page,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </TreeGridComponent>
    </div>
  );
};

export default Orders;
