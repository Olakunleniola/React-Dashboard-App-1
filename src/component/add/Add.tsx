import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Prop = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setOpen }: Prop) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}s/`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
          lastName: "Johnson",
          firstName: "Doe",
          email: "doe@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          verified: false,
          age: 28,
        }),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${slug}s`]);
      setOpen(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((column) => column.field !== "id" && column.field !== "img")
            .map((column) => (
              <div className="items">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
