import pic from "../assets/cake.jpg"
const Build = () =>{
return (
  <div className="containers">
    <div className="image">
      <img
        src={pic}
        style={{
          height: "150px",
          width: "170px",
          objectFit: "cover",
        }}
      />
    </div>
    <div>
      <div>name</div>
      <div>email</div>
      <div>aNumber</div>
      <div>address</div>
    </div>
  </div>
);
};
export default Build;


