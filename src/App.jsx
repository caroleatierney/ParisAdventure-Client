import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header         from "./components/header";
import AddBlog        from "./components/addBlog";
import AddItem        from "./components/addItem";
import DisplayBlogs   from "./components/displayBlogs";
import ViewUpdateItem from "./components/viewUpdateItem";
import UpdateBlog     from "./components/updateBlog";
import Itinerary      from "./routes/France/itinerary";
import VirtualAlbum   from "./routes/France/virtualAlbum";
import MonaLisa       from "./routes/France/monaLisa";
import HomeScreen     from "./routes/Home/homeScreen";
import BackGround     from "./assets/background.jpg";
import Footer         from "./components/footer";

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
          <Route path="/virtualAlbum" element={<VirtualAlbum />} />
          <Route path="/monaLisa" element={<MonaLisa />} />
          <Route path="/addBlog/:postId" element={<AddBlog />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/displayBlogs" element={<DisplayBlogs />} />
          <Route path="/viewUpdateItem/:postId" element={<ViewUpdateItem />} />
          <Route path="/updateBlog" element={<UpdateBlog />} />
        </Routes>
        <Footer />
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
