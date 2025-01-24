import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header     from "./components/header";
import Itinerary  from "./components/itinerary";
import MonaLisa   from "./components/monaLisa";
import HomeScreen from "./routes/Home/homeScreen";
import BackGround from "./Assets/background.jpg";

function App() {
   
  return (
    <Router>
      <div
        style={{ backgroundImage: `url(${BackGround})` }}
        className="bg-repeat min-h-screen"
        alt="Paris background"
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/homeScreen" element={<HomeScreen />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/monaLisa" element={<MonaLisa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// className="h-[2000px]  bg-contain repeat-y bg-center"
// style={{ backgroundImage: `url(${BackgroundImage})` }}


// <Footer />

// import Footer from "./components/footer";

// import StLuciaPics from "./routes/StLucia/stLuciaPics";
// import AddPicsStLucia from "./components/addPicsStLucia";
// import ViewUpdateSLPost from "./components/viewUpdateSLPost";
// import AddBlogSL from "./components/addBlogSL";
// import DisplaySLBlogs from "./components/displaySLBlogs";
// import UpdateSLBlogs from "./components/updateSLBlogs";

// import GrandAntiguaPics from "./routes/GrandAntigua/grandAntiguaPics";
// import AddPicsGrandAntigua from "./components/addPicsGrandAntigua";
// import ViewUpdateGAPost from "./components/viewUpdateGAPost";
// import AddBlogGA from "./components/addBlogGA";

{
  /* <Route path="/" element={<HomeScreen />} /> */
}
{
  /* <Route path="/stLuciaPics" element={<StLuciaPics />} /> */
}
{
  /* <Route path="/grandAntiguaPics" element={<GrandAntiguaPics />} /> */
}
{
  /* <Route path="/addPicsStLucia" element={<AddPicsStLucia />} /> */
}
{
  /* <Route */
}
{
  /* path="/addPicsGrandAntigua" */
}
{
  /* element={<AddPicsGrandAntigua />} */
}
{
  /* /> */
}
{
  /* <Route path="/addBlogSL/:postId" element={<AddBlogSL />} /> */
}
{
  /* <Route path="/addBlogGA/:postId" element={<AddBlogGA />} /> */
}
{
  /* <Route */
}
{
  /* path="/viewUpdateSLPost/:postId" */
}
{
  /* element={<ViewUpdateSLPost />} */
}
{
  /* /> */
}
{
  /* <Route */
}
{
  /* path="/viewUpdateGAPost/:postId" */
}
{
  /* element={<ViewUpdateGAPost />} */
}
{
  /* /> */
}
{
  /* <Route path="/displaySLBlogs/:postId" element={<DisplaySLBlogs />} /> */
}
{
  /* <Route */
}
{
  /* path="/updateSLBlogs/:postId/:itemId" */
}
{
  /* element={<UpdateSLBlogs />} */
}
{
  /* />  */
}
{
  /* <Route
            path="/viewUpdateGABlogs/:id"
            element={<ViewUpdateGABlogs />}
          />  */
}
