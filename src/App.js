import React,{useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import './App.css';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const  App = ()=> {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then(response=> setData(response.data.photos.photo)
  )
  }
  return (
    <div>
      <center>
          <h2>Gallery Snapshot</h2><br/>
          <form onSubmit={submitHandler}>
          <input size="40" type="text" placeholder='search' value={search} onChange={changeHandler} /><br/><br/>
          <input type="submit" name="submit"/>
        </form>
        <br/>
        {data.length>=1?<Gallery data={data}/>:<h4>No Data Loaded</h4>}
      </center>
    </div>
  );
}

export default App;
