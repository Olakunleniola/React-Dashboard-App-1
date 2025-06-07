import "./user.scss";
import Single from "../../component/single/Single";
import { singleUser } from "../../data";

function User() {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
}

export default User;
