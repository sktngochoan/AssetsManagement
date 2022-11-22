import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageHeader from "../../../components/pageheader/PageHeader";
function User() {
  const role = [
    {
      label: " Admin",
      key: "1",
    },
    {
      label: "User",
      key: "2",
    },
  ];
  const menu = [
    {
      type: "SortBar",
      props: {
        btnText: "Type",
        menu: {
          role,
        },
      },
    },
    {
      type: "CreateBtn",
      props: {
        buttonTitle: "Create new User",
        onClick: () => alert("123123123"),
      },
    },
  ];

  return (
    <div>
      <PageHeader tableName="User list" menu={menu} />
    </div>
  );
}

export default User;
