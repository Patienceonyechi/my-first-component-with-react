const Stud = () =>{
return (
  <div>
    <h1 style={{
      color: "navyBlue",
    }}>Names Of Kode10x Student</h1>
    <input type="" />
    <label>  Select  </label>
    <select style={{
         backgroundColor : "navyBlue",
         borderRadius: "10px",
         height: "30px",
    }}>
      <option disable>  -------select-------  </option>
      <option value="Pepe">Pepe</option>
      <option value="Ike">Ike</option>
      <option value="Tosin">Tunde </option>
      <option value="Tunde">Tunde</option>
      <option value="Vera">Vera</option>
      <option value="Jude">Jude</option>
      <option value="Melvin">Melvin</option>
      <option value="Kome">Kome</option>
      <option value="Debby">Debby</option>
      <option value="Ope">Ope</option>
    </select>
    <button style={{
       marginLeft: "20px",
    }}>Submit</button>
  </div>
);
}
export default Stud;