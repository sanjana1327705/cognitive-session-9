import React from 'react';

import './App.css';
import List from "./components/list";
import Search from './components/search';
import {useState} from "react"

const title:string= "React Training";


const listOfItems:Array<any> = [
  {
    title: "Learn React",
    url: "https://eprint.iacr.org/2021/1022",
    created_at: "2011-12-12",
    author: "grey-area",
    points: 1107,
    num_comments: 12,
    objectID: 1,
  },
  {
    title: "Learn TypeScript",
    url: "https://eprint.iacr.org/2021/1022",
    created_at: "2012-12-12",
    author: "grey-area",
    points: 6107,
    num_comments: 1,
    objectID: 2,
  },
  {
    created_at: "2017-02-19T21:16:33.000Z",
    title: "Reflecting on one very, very strange year at Uber",
    url: "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
    author: "grey-area",
    points: 4107,
    num_comments: 530,
    objectID: 3,
  },
  {
    created_at: "2021-04-05T14:04:22.000Z",
    title: "Google’s copying of the Java SE API was fair use [pdf]",
    url: "https://www.supremecourt.gov/opinions/20pdf/18-956_d18f.pdf",
    author: "pdoconnell",
    points: 4103,
    num_comments: 930,
    objectID: 4,
  },
];

function App() {
  const [searchText, setSearchText] = useState("");

  function handleChange(event: any) {
    setSearchText(event.target.value);
  }

  const filteredList = listOfItems.filter((item: any) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <nav>
        <div className="heading">
          <h1>{title}</h1>
         
        </div>
        <Search searchText={searchText} onChange={handleChange}>
          Search
        </Search>
      </nav>
      <List listOfItems={filteredList} />
    </div>
  );
}

export default App;