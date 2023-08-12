import pic from "../assets/instructors.jpg"
const Story = () =>{
return (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "Skyblue",
      height: ""
    }}
     >
    <div>
      <h1>Instructors</h1>
      <p>
        Sir Raheem Toheed
         <br />
        Sir Lucky Ofili
        <br />
        Sir Gideon Ekeke
        <br />
        Sir Anyamah Edwin
        <br />
        Sir Muomaife Fred David
      </p>
     </div>
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
export default Story;