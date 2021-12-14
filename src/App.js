import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  let postsData = [
    {
      id: 1,
      text: `post 1`,
      likes: 1
    },
    {
      id: 2,
      text: `post 2`,
      likes: 14
    },
    {
      id: 3,
      text: `post 3`,
      likes: 32
    },
    {
      id: 4,
      text: `post 4`,
      likes: 8
    },
  ]

  let dialogsData = [
    {
        id: 1, 
        name: "Andrew"
    },
    {
        id: 2, 
        name: "Maria"
    },
    {
        id: 3, 
        name: "Alex"
    },
    {
        id: 4, 
        name: "Nadya"
    },
];

let messagesData = [
  {
      id: 1,
      src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquid impedit assumenda corrupti commodi temporibus, repellendus sunt a sapiente odit,
      nemo laboriosam necessitatibus amet. Debitis provident obcaecati eius aut natus!`
  },
  {
      id: 2,
      src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
      text: `Hello world`
  },
  {
      id: 3,
      src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
      text: `ok google how to write`
  }
]
  return (<BrowserRouter>
    <div className="app_wrapper">
      <Header />
      <Navbar />

      <div className="app_wrapper_content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>} />
          <Route path="/profile" element={<Profile postsData={postsData}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div></BrowserRouter>
  );
}

export default App;
