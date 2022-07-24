import React from "react";

import {
  Page,
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
} from "@syncfusion/ej2-react-treegrid";
import { Grid, Search, Toolbar } from "@syncfusion/ej2-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../Components";

Grid.Inject(Search, Toolbar);

const Employees = () => {
  return (
    <div className="m-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Employees" category="Page" />

      <TreeGridComponent
        dataSource={employeesData}
        allowPaging="true"
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Search, Toolbar]} />
      </TreeGridComponent>
    </div>
  );
};

export default Employees;
