import pic from "../assets/nocoded.jpg"
const No = () =>{
return (
  <div
    style={{
      marginTop: "20px",
    }}
  >
    <img
      Src={pic}
      style={{
        height: "300px",
        width: "350px",
        objectFit: "cover",
      }}
    />
    <div>
      <h3>No Code Day @Kode10x</h3>
      <p>
        On this day,all we did was to have have and also talked <br />
        and display the project we built using (Html/Css, Javascript,Figma).
        <br />
        Games for that day were lido,Ayo,scramble,chess
      </p>
      <p>Register to witness an other Nocode day </p>
      <button >register</button>
    </div>
  </div>
);
}
export default No;