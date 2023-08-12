import pic from "../assets/malush.jpg";
const UserProfile = () => {
  return (
    <div>
      <img
        Src={pic}
        style={{
          height: "250px",
          width: "350px",
          objectFit: "cover",
          borderRadius: "18px",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          marginLeft: "350px",
        }}
      />
      <div
        style={{
          color: "blue",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Mr Malush
      </div>
      <div
        style={{
          color: "blue",
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Happy Birthday, May this new year brings in joy and peace in all you do.
      </div>
    </div>
  );
};
export default UserProfile;
