import "./pageHeader.css";
import { React, useState } from "react";
import {
  EditOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button, Input, Tooltip, Dropdown, DatePicker } from "antd";
const { Search } = Input;
const onSearch = () => {};

const dasdasd = [];
const category = [
  {
    label: " test1",
    key: "1",
  },
  {
    label: "test2",
    key: "2",
    label: "test3",
    key: "3",
    label: "test4",
    key: "4",
  },
];
function TableName(props) {
  return <div className="tableName">{props.tableName}</div>;
}
function DateBar(props) {
  return (
    <div className={props.className}>
      <DatePicker format={"DD/MM/YYYY"} placeholder={props.text} onChange />
    </div>
  );
}
function SearchBar(props) {
  return (
    <div className={props.className}>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  );
}
function SortBar(props) {
  return (
    <div className="sortBar">
      <Dropdown
        menu={{ items: props.menu.category || [] }}
        trigger={["click"]}
        placement="bottom"
      >
        <Button
          style={{
            width: 100,
          }}
          onClick={(e) => e.preventDefault()}
        >
          {props.btnText}
        </Button>
      </Dropdown>

      <Tooltip>
        <Button icon={<FilterOutlined />} />
      </Tooltip>
    </div>
  );
}
function CreateBtn(props) {
  return (
    <div className="createButton">
      <Button type="primary" danger onClick={props.onClick}>
        {props.buttonTitle}
      </Button>
    </div>
  );
}

const onClick = ({ key }) => {
  console.log(`Click on item ${key.target.value}`);
};

export default function PageHeader(props) {
  const renderComponent = (item) => {
    switch (item.type) {
      case "SortBar":
        return <SortBar {...item.props} />;
      case "DateBar":
        return <DateBar {...item.props} />;
      case "SearchBar":
        return <SearchBar {...item.props} />;
      case "CreateBtn":
        return <CreateBtn {...item.props} />;
      default:
        return;
    }
  };

  return (
    <>
      <div className="pageHeader">
        <TableName tableName={props.tableName} />
        <div className="toolBar">
          {props?.menu?.map((item) => renderComponent(item))}

          {/* <SortBar
            className={!props.sortType ? "sortBar" : "disable"}
            menu={{ role }}
            btnText="Type"
          />
          <SortBar
            className={!props.sortCategory ? "sortBar" : "disable"}
            menu={{ category }}
            btnText="Category"
          />

          <DateBar
            className={!props.assginDate ? "dateBar" : "disable"}
            text="Assgin Date"
          />
          <DateBar
            className={!props.returnDate ? "dateBar" : "disable"}
            text="Return date"
          />
          <SearchBar className={!props.search ? "searchBar" : "disable"} />
          <CreateBtn
            buttonTitle={props.btnTitle}
            className={!props.createButton ? "createButton" : "disable"}
          /> */}
        </div>
      </div>
    </>
  );
}
