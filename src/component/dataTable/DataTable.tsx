import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./datatable.scss";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: any;
  slug: string;
};

function DataTable(props: Props) {

  const queryClient = useQueryClient();

  const mutation = useMutation({  
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${props.slug}s/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${props.slug}s`])
    }

  })

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="view" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <DataGrid
        className="dataGrid"
        rows={props.rows ?? []}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
}

export default DataTable;
