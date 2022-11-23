import { Table } from "antd";
import React, { useState } from "react";
const TableINDEX = ({ columns, data, loading, tableOnchange, pagination }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newpage) => {
    setPage(newpage);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={tableOnchange}
      loading={loading}
      pagination={pagination}
    />
  );
};
export default TableINDEX;
