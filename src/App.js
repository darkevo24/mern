import logo from './logo.svg';
import './App.css';
import React ,{useEffect, useState}from 'react';
import axios from "axios";

function App() {
  useEffect(function(){
    axios.get("http://localhost:3001/read").then(function(res){
      setData(res.data);
    })
  })
  const [foodName,setFoodName] = useState("");
  const [days,setDays] = useState(0);
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <h1>Crud App with MERN</h1>
      <label>Food Name :</label>
      <br></br>
      <input onChange={function(e){
        setFoodName(e.target.value);
      }} type="text"></input>
      <br></br>
      <label>Days Since Ate it : </label>
      <br></br>
      <input onChange={function(e){
        setDays(e.target.value);
      }} type="number"></input>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-primary" onClick={function(){
        axios.post("http://localhost:3001/",{
          foodName : foodName,
          days : days
        });
      }}>Add To List</button>
      <br></br>
      <h1>Food List</h1>
      <table class="table">
      <thead>
                <tr>
                  <th scope="col">Food Name</th>
                  <th scope="col">Days Since Ate</th>
                </tr>
              </thead>
      {data.map(function(data){
        return (
              <tbody>
                <tr>
                  <td>{data.foodName}</td>
                  <td>{data.daysSinceAte}</td>
                </tr>
              </tbody>
        )
      })}
    </table>
    </div>
  );
}

export default App;
