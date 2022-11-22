import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TableINDEX from "../../../components/table";
import { Table } from "antd";
import ConfirmModal from "../../../components/confirmModal";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Chinese Score",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Math Score",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "English Score",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 1,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 2,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 3,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 4,
    math: 99,
    english: 89,
  },
  {
    key: "5",
    name: "John Brown",
    chinese: 1,
    math: 60,
    english: 70,
  },
  {
    key: "6",
    name: "Jim Green",
    chinese: 2,
    math: 66,
    english: 89,
  },
  {
    key: "7",
    name: "Joe Black",
    chinese: 3,
    math: 90,
    english: 70,
  },
  {
    key: "8",
    name: "Jim Red",
    chinese: 4,
    math: 99,
    english: 89,
  },
  {
    key: "9",
    name: "John Brown",
    chinese: 1,
    math: 60,
    english: 70,
  },
  {
    key: "10",
    name: "Jim Green",
    chinese: 2,
    math: 66,
    english: 89,
  },
  {
    key: "11",
    name: "Joe Black",
    chinese: 3,
    math: 90,
    english: 70,
  },
  {
    key: "12",
    name: "Jim Red",
    chinese: 4,
    math: 99,
    english: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log(pagination);
  console.log(sorter);
};
function Home() {
  return (
    <div>
      <TableINDEX pageSize={10} tableOnchange={onChange} columns={columns} data={data} />
    </div>
  );
}

export default Home;
