import pic from "../assets/malush.jpg"
const Pictures = () =>{
return(
<div>
 <h1>call my name</h1>
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
)
}
export default Pictures;