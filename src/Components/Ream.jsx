import bookreview from "../assets/bookreview.jpg";
const Ream = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <img
        Src={bookreview}
        style={{
          height: "250px",
          width: "350px",
          objectFit: "cover",
        }}
      />
      <div>
        <h2>Book Review</h2>
        <p>Diving into the world of knowledge #Eat that Frog</p>
        <p>all its saying is that we should stop procrastination,</p>
      </div>
    </div>
  );
};
export default Ream;
