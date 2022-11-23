import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import PageHeader from "../../../components/pageheader/PageHeader";
const category = [
  {
    label: " test1",
    key: "1",
  },
  {
    label: "test2",
    key: "2",
  },
  {
    label: "test3",
    key: "3",
  },
  {
    label: "test4",
    key: "4",
  },
];
const menu = [
  {
    type: "SortBar",
    props: {
      btnText: "Type",
      menu: {
        items: category,
      },
    },
  },

  {
    type: "SearchBar",
    props: {
      onSeacrch: () => {
        alert("xxxx");
      },
    },
  },
  {
    type: "CreateBtn",
    props: {
      buttonTitle: "Create new Asset",
      onClick: () => alert("asdasd"),
    },
  },
];
function Assets() {
  const fireNoti = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      icon: "question",
      confirmButtonText: "Save",
      confirmButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Done!",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div>
        <PageHeader tableName="Asset" btnTitle="Add new asset" menu={menu} />
      </div>
    </>
  );
}

export default Assets;
