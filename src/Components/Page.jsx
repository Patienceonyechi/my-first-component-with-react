import pic from "../assets/kode10xlog.jpg"
const Page = () => {
  return (
    <div>
      <h1>About Kode10x</h1>
      <p>They are group of well trained and experience developer<br/> and project managers who specialize in teaching young people </p>
      <img
     src = {pic}
        style={{
          height: "150px",
          width: "170px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};
export default Page;
