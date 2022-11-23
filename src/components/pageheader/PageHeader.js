import "./pageHeader.css";
import { React } from "react";
import { Button, Input, DatePicker, Select } from "antd";
const { Search } = Input;

function TableName(props) {
  return <div className="tableName">{props.tableName}</div>;
}
function DateBar(props) {
  return (
    <div className="functionBar">
      <DatePicker format={"DD/MM/YYYY"} placeholder={props.text} onChange />
    </div>
  );
}
function SearchBar(props) {
  return (
    <div className="functionBar">
      <Search
        placeholder="Input search text"
        onSearch={props.onSearch}
        style={{
          width: 200,
        }}
        allowClear
      />
    </div>
  );
}
function SortBar(props) {
  return (
    <div className="functionBar">
      <Select
        labelInValue
        placeholder="Type"
        style={{
          width: 200,
        }}
        allowClear
        onChange={props.handleChange}
        dropdownMatchSelectWidth={false}
        placement="bottomLeft"
        options={props.menu}
      />
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
        </div>
      </div>
    </>
  );
}
