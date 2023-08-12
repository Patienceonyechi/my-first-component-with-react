import Button from "./Components/Button";
import UserProfile from "./Components/userProfile";
import Search from "./Components/Search";
import Form from "./Components/Form";
import Table from "./Components/Table";
import Hero from "./Components/Hero";
import Button2 from "./Components/Button2";
import Page from "./Components/Page";
import Ream from "./Components/Ream";
import Foot from "./Components/Foot";
import Login from "./Components/Login";
import My from "./Components/My";
import Story from "./Components/Story";
import No from "./Components/No";
import Cour from "./Components/Cour";
import Stud from "./Components/Stud";
import cake1 from "./assets/cake.jpg";
import cake2 from "./assets/cake.jpg";
import cake3 from "./assets/cake.jpg";
import Profile from "./Components/Profile";
import Counter from "./Components/Counter";
import Primary from "./Components/Primary";
import Creed from "./Components/Creed";
import Calender from "./Components/Calender";
import Formss from "./Components/Formss";
import Pictures from "./Components/Pictures";
import Phone from "./Components/Phone";
import Shop from "./Components/Shop";
import Lines from "./Components/Lines";
import Build from "./Components/Build";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Services from "./Components/Services";
const App = () => {
  return (
    <div>
      {/* <center>hello react am pepe</center> */}
      <Hero />
      <UserProfile />
      <Search />
      <Form />
      <Table />
      <Button2 />
      <Page />
      <Ream />
      <My />
      <Story />
      <No />
      <Cour />
      <Button />
      <Stud />
      <Foot />
      <Login />
      <Profile
        avatar={cake1}
        name="pepe"
        email="pepe@gmail.com"
        pNumber="09036116362"
      />
      <Profile
        avatar={cake2}
        name="pepe"
        email="pepe@gmail.com"
        pNumber="09036116362"
      />
      <Profile
        avatar={cake3}
        name="pepe"
        email="pepe@gmail.com"
        pNumber="09036116362"
      />
      <Counter />
      <Primary />
      <Creed />
      <Calender />
      <Formss />
      <Pictures />
      <Phone />
      <Shop />
      <Lines />
      <Build />
      <About />
      <Blog />
     <Services />  
    </div>
  );
};
export default App;
 