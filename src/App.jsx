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
          <Route
            path="/addItem"
            element={<AddItem />}
          />
          <Route
            path="/displayBlogs"
            element={<DisplayBlogs />}
          />
          <Route 
            path="/viewUpdateItem/:postId"
            element={<ViewUpdateItem />}
          />
          <Route
            path="/updateBlog/:postId/:itemId"
            element={<UpdateBlog />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;