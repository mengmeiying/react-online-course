import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
];

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

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
