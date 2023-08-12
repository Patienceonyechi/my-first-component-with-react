const Table = () => {
return (
  <center>
    <div>
      <label htmlFor="date of birth">Date Of Birth</label>
      <input required type="date" placeholder="Date of Birth" />
    </div>
    <div>
      <input id="phone number" placeholder="Phone Number" required />
    </div>
    <div>
      <label>Select</label>
      <select style={{
       backgroundColor: "blue",
       borderRadius: "10px",
       height: "30px",
       margin: "20px",
      }}>
        <option disable>-------select-------</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
        <option value="China">China</option>
        <option value="UK">Uk</option>
      </select>
    </div>
  </center>
);
}
export default Table;
