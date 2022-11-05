import RegisterUser from "../components/RegisterUser";
export default function Register() {
  return (
    <div className="class-editor-body">
      <div className="class-editor-content">
        <form id="register-partial">
          <div className="container">
            <h1>Register</h1>

            <label>
              <b>First Name</b>
            </label>
            <input type="text" placeholder="Name" name="name" id="firstName" required />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label>
              <b>Password</b>
            </label>
            <input type="password" placeholder="Password" name="psw" id="psw" required />

            <button type="button" onClick={RegisterUser} id="submitData" name="submitData" className="registerbtn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
