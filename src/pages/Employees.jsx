import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Search,
  Toolbar,
  Edit,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid, contextMenuItems } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        editSettings={editing}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};
export default Employees;
