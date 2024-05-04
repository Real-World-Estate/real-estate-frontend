import { appLogo, profile } from "../../assets";

function DashTopBar() {
  return (
    <div className="dash-top-bar">
      <img
        src={appLogo.logo_cut}
        alt="Competent Property Group"
        className="logo"
      />
      <div className="top-bar-welcome">
        <h1>Welcome, Admin</h1>
        <h3>Senior Admin, Real Estate Ltd.</h3>
      </div>
      <input
        type="search"
        name="search"
        id="search"
        className="search"
        placeholder="Search.."
      />
      <div className="top-bar-profile">
        <div className="profile-user">
          <h4>Admin Name</h4>
          <h5>Admin Post</h5>
        </div>
        <img src={profile.profile1} alt="" />
      </div>
    </div>
  );
}

export default DashTopBar;
