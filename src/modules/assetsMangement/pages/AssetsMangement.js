import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import PageHeader from "../../../components/pageheader/PageHeader";

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
        <PageHeader tableName="Asset" btnTitle="Add new asset" />
      </div>
    </>
  );
}

export default Assets;
