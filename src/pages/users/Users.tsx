import "./users.scss";
import { useState } from "react";
import DataTable from "../../component/dataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../data";
import Add from "../../component/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },

  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },

  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 200,
  },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 110,
  //   editable: true,
  // },
  { field: "createdAt", headerName: "Created At", width: 200 },
  { field: "verified", headerName: "Status", type: "boolean", width: 100 },
];

function Users() {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1> Users </h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <div className="dataGrid">
        <DataTable slug="user" columns={columns} rows={userRows} />
      </div>
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
}

export default Users;
