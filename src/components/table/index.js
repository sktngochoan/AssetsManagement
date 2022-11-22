import { Table } from "antd";
import React, { useEffect, useState } from "react";
const TableINDEX = ({ columns, data, fetchData, loading, pageSize,tableOnchange }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newpage) => {
    setPage(newpage);
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination);
    console.log(sorter);
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        current: page,
        pageSize: pageSize,
        total: data?.length,
        onChange: (page) => handlePageChange(page),
        size: "medium",
      }}
      onChange={tableOnchange}
      loading={loading}
    />
  );
};
export default TableINDEX;
