const Formss = () =>{
return (
  <center>
    <form action="">
      <div>
        <label htmlFor="firstName">firstName</label>
        <input
          required
          id="firstName"
          type="text"
          placeholder="enter your firstName"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">phoneNumber</label>
        <input required maxLength="11" type="tell" />
      </div>
      <div>
        <label htmlFor="Url">Url</label>
        <input required type="Url" />
      </div>
    </form>
  </center>
);
};
export default Formss;