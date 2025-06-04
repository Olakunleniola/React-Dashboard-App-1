import "./users.scss";
import DataTable from "../../component/dataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  { field: "verified", headerName: "Status", type: "boolean", width: 100 },
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
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

function Users() {
  return (
    <div className="users">
      <div className="info">
        <h1> Users </h1>
        <button>Add New User</button>
      </div>
      <div className="dataGrid">
        <DataTable slug="user" columns={columns} rows={userRows} />
      </div>
    </div>
  );
}

export default Users;
