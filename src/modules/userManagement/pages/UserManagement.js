import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageHeader from "../../../components/pageheader/PageHeader";
import { useNavigate, Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TableINDEX from "../../../components/table";
import { Space, Button } from "antd";
import Swal from "sweetalert2";
import index, { getListUser } from "../../../services/index.js";

function User() {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [sortInput, setSortInput] = useState("");
  const role = [
    {
      label: "Admin",
      value: "ADMIN",
    },
    {
      label: "Staff",
      value: "STAFF",
    },
  ];

  const columns = [
    {
      title: "Staff Code",
      dataIndex: "staffCode",
      sorter: {
        multiple: 1,
      },
      render: (text) => <a>{text}</a>,
      onCell: (record) => {
        return {
          onClick: () => {
            Swal.fire("User Details", JSON.stringify(record), "info");
          },
        };
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
      sorter: {
        multiple: 2,
      },
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Joined Date",
      dataIndex: "joinedDate",
      sorter: {
        multiple: 3,
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: {
        multiple: 4,
      },
    },
    {
      title: null,
      key: "actions",
      width: "100px",
      render: (_, record) => (
        <Space>
          <>
            <Link onClick={handleEdit}>
              <div className="icon-custom-small">
                <EditOutlined />
              </div>
            </Link>
            <Link onClick={handleDelte(record)}>
              <div className="icon-custom-small">
                <DeleteOutlined />
              </div>
            </Link>
          </>
        </Space>
      ),
    },
  ];
  let [listUser, setListUser] = useState([]);
  const [totalElements, setTotalElements] = useState();

  useEffect(() => {
    getListUser(pageIndex - 1, searchInput, sortInput, typeInput).then(
      (response) => {
        setTotalElements(response.data.content.totalElements);
        setListUser(response.data.content.content);
      }
    );
  }, [pageIndex, searchInput, typeInput, sortInput]);

  const onChangeSearch = (value) => {
    let searchTerm;
    searchTerm = value || "";
    setSearchInput(searchTerm);
    setPageIndex(1);
  };
  const onChangeSort = (value) => {
    let sortTerm;
    value ? (sortTerm = value.value) : (sortTerm = "");

    setTypeInput(sortTerm);
    setPageIndex(1);
  };
  const handleDelte = () => {};
  const handleEdit = () => {};
  const navigate = useNavigate();

  const handlePageChange = (newpage) => {
    setPageIndex(newpage);
  };
  const handleSort = (sorter) => {
    let isArray = Array.isArray(sorter);
    let orders;
    let tempString = "";
    let finalString;
    if (!isArray) {
      if (sorter.order === {} || typeof sorter.order === "undefined") {
        finalString = "";
      } else {
        if (sorter.order === "ascend") {
          orders = "asc";
        } else {
          orders = "desc";
        }
        if (sorter.field === "fullName") {
          sorter.field = "firstName";
        }
        finalString = sorter.field + "." + orders;
      }
    } else {
      sorter.map((item) => {
        if (item.order === "ascend") {
          orders = "asc";
        } else {
          orders = "desc";
        }
        if (item.field === "fullName") {
          item.field = "firstName";
        }
        tempString += item.field + "." + orders + ",";
      });
      finalString = tempString.slice(0, -1);
    }
    setSortInput(finalString);
  };
  const onChange = (pagination, filters, sorter, extra) => {
    handleSort(sorter);
    console.log(sorter);
  };
  const menu = [
    {
      type: "SortBar",
      props: {
        menu: role,
        handleChange: onChangeSort,
      },
    },
    {
      type: "SearchBar",
      props: {
        onSearch: onChangeSearch,
      },
    },
    {
      type: "CreateBtn",
      props: {
        buttonTitle: "Create new User",
        onClick: () => navigate("./createUser"),
      },
    },
  ];
  return (
    <div>
      <PageHeader tableName="User list" menu={menu} />
      <TableINDEX
        tableOnchange={onChange}
        columns={columns}
        totalElements={totalElements}
        data={listUser || []}
        pagination={{
          current: pageIndex,
          pageSize: 10,
          total: totalElements,
          onChange: handlePageChange,
          size: "medium",
        }}
      />
    </div>
  );
}

export default User;
