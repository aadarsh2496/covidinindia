import React,{useEffect,useState} from 'react';
import './App.css';
import './indiaCases'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import 'moment-timezone';
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    return new Date(string).toLocaleDateString([],options);
}
function App() {
  const [latest, setLatest] = useState("");
    const[results,setResults] = useState([]);
    const [searchCountries, setSearchCountries] = useState("");
  useEffect(() => {
axios
  .all([
    axios.get("https://corona.lmao.ninja/v2/countries/India"),
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
])
  .then(
    responseArray =>{
      setLatest(responseArray[0].data);
      setResults(responseArray[1].data.data.regional);
      //console.log(responseArray[1].data.data.regional);
    })
  .catch(err =>{
    console.log(err);
  });
},[]);

const filterCountries = results.filter(
  item =>{
    return searchCountries!=="" ? item.loc.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  }
);
//filter country's countryInfo Begin
const countries = filterCountries.map((data, index) => {
  return(
    <Card
    key = {index}
    bg="light"
    text={"dark"}
    className="text-center"
    style={{ margin: "10px" }}
    >
    <Card.Img variant = "top" src ={latest.countryInfo.flag}/>
    <Card.Body>
      <Card.Title>{data.loc.toUpperCase()}</Card.Title>
      <Card.Text>Total Cases: {data.totalConfirmed}</Card.Text>
      <Card.Text>Confirmed Cases: {data.confirmedCasesIndian}</Card.Text>
      <Card.Text>Recovered cases: {data.discharged}</Card.Text>
      <Card.Text>Total Deaths: {data.deaths}</Card.Text>
      <Card.Text>Confirmed Cases with foreign nationals: {data.confirmedCasesForeign}</Card.Text>
    </Card.Body>
    </Card>
  );
});
var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];
  //var ViewCount = count.ViewCount;
  return (
    <div>
    <br/>
    <h2 style = {{ textAlign: "center" }}>Covid-19 Live report for India</h2>
    <CardDeck>
<Card
bg="secondary"
text={"white"}
className="text-center"
style={{ margin: "10px" }}
>
  <Card.Body>
    <Card.Title>India Cases</Card.Title>
    <Card.Text>
      Total: {latest.cases}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small>Last updated: {formatDate(latest.updated)}.</small>
  </Card.Footer>
</Card>
<Card
bg="danger"
text={"white"}
className="text-center"
style={{ margin: "10px" }}
>
  <Card.Body>
    <Card.Title>India Deaths</Card.Title>
    <Card.Text>
      Total Deaths: {latest.deaths}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small>Last updated: {formatDate(latest.updated)}.</small>
  </Card.Footer>
</Card>
<Card
bg="success"
text={"white"}
className="text-center"
style={{ margin: "10px" }}
>
  <Card.Body>
    <Card.Title>Recovered cases in India</Card.Title>
    <Card.Text>
      Total Recovered cases: {latest.recovered}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small>Last updated {formatDate(latest.updated)}.</small>
  </Card.Footer>
</Card>
</CardDeck>
<br/>
<Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Control
    type="text"
    placeholder="Filter by State's name"
    onChange = {e=> setSearchCountries(e.target.value.toLowerCase())}
    style={{ width: "230px" }}
    />
  </Form.Group>
</Form>
<br/>
<Columns queries={queries}>{countries}</Columns>
    </div>
  );
}
export default App;
