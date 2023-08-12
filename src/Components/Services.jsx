import pic from "../assets/kodefoot.jpg"
const Services = () =>{
return (
  <div>
    <h1>All package</h1>
    <p>we offer great services to all our client</p>
    <img
      src={pic}
      style={{
        height: "350px",
        width: "450px",
        objectFit: "cover",
        borderRadius: "10px",
      }}
    />
  </div>
);
}
export default Services;