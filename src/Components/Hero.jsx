import logo from "../assets/react.svg"
const Hero = () =>{
return (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "gray",
      height: "100px"
    }}
  >
    <div className="logo">
      <img
        Src={logo}
        style={{
          height: "30px",
          width: "30px",
          objectFit: "cover",
        }}
      />
    </div>

    <div
      className="navigation"
      style={{
        display: "flex",
        justifycontent: "center",
      }}
    >
      <nav
        style={{
          marginLeft: "20px",
        }}
      >
        Home
      </nav>
      <nav
        style={{
          marginLeft: "20px",
        }}
      >
        About
      </nav>
      <nav
        style={{
          marginLeft: "20px",
        }}
      >
        Blog
      </nav>
      <nav
        style={{
          marginLeft: "20px",
        }}
      >
        Service
      </nav>
      <nav
        style={{
          marginLeft: "20px",
        }}
      >
        Contact
      </nav>
    </div>
    <button style={{
      backgroundColor: "skyBlue",
      height: "30px",
      width: "70px",
      borderRadius: "10px",
    }}>Sign Up</button>
  </header>
);
}
export default Hero;