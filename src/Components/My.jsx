import pic from "../assets/pepe.jpg"
const My = () => {
return (
  <div>
    <h1>Journey so far</h1>
    <p>
      My name is Pepe, a student of kode10x <br />
    </p>

    <div>
      <img
           src = {pic}
        style={{
          height: "150px",
          width: "170px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
);
}
export default My;