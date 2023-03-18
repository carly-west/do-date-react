import EditUserInfo from '../components/EditUserInfo';
import DeleteUser from '../components/DeleteUser';

// Import the functions you need from the SDKs you need
import EditUserPassword from '../components/EditUserPassword';

export default function UserPage() {
  return (
    <div className="user-page">
      <h1>Account</h1>
      <p>Change your account settings</p>
      <div className="class-editor-body">
        <div className="class-editor-content">
          <EditUserInfo />
        </div>
      </div>

      <div className="class-editor-body">
        <div className="class-editor-content">
          <EditUserPassword />
        </div>
      </div>

      <div className="class-editor-body">
        <div className="class-editor-content">
          <DeleteUser />
        </div>
      </div>
    </div>
  );
}
