import React from "react";
import {
  Page,
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Inject,
  Sort,
  Selection,
  Filter,
} from "@syncfusion/ej2-react-treegrid";
import { Grid, Toolbar } from "@syncfusion/ej2-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../Components";

Grid.Inject(Toolbar);

const Customers = () => {
  return (
    <div className="m-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Customers" category="Page" />

      <TreeGridComponent
        dataSource={customersData}
        allowPaging="true"
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Toolbar, Edit, Sort, Selection, Filter]} />
      </TreeGridComponent>
    </div>
  );
};

export default Customers;
