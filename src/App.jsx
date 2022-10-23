import './App.css';
import {useState, useEffect} from 'react'



function App() {


  const [user, setUser] = useState([{
    dName: "", vNumber: "", checkIn:"", checkOut:""
  }]);

  const changeState = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }


  const getLocalData = () =>{
    let list = localStorage.getItem("user");
    console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem("user"));

    }else{
      return [];
    }
  }
  

  const [item, setItems] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(item));
  }, [item]);

  const addItem = () => {
    setItems([ user, ...item]);
  }
  
  

  return (
    <div className="App">
      <div className='form'>
              <form className='form-container'>
                <h1>Parking Input</h1>
                <input type="text" placeholder='Driver name' name='dName' value={user.dName} onChange={changeState} autoComplete="off" />
                <input type="text" placeholder='Vehicle number' name='vNumber' value={user.vNumber} onChange={changeState}  autoComplete="off" />
                <p className='check'>Check In Time</p>
                <input type="time" placeholder='checkin' name='checkIn' value={user.checkIn} onChange={changeState}   />
                <p className='check'>Check Out Time</p>
                <input type="time" placeholder='checkOut' name='checkOut' value={user.checkOut} onChange={changeState}  />
                <input type="submit" value="Submit" className='btn' onClick={addItem} />
              </form>
            

              <div className="garage">
                <>
                  <h1>Parked car details</h1>
                  {item.map((elem, ind) =>{
                    return (
                      
                      <div key={ind} className="car">
                        <p>Driver Name : {elem.dName}</p>
                        <p>Vehicle Number : {elem.vNumber}</p>
                        <p>Check In Time : {elem.checkIn}</p>
                        <p>Check Out Time : {elem.checkOut}</p> 

                      </div>
                    )
                  })}
                </> 
                
              </div>
      </div>
    </div>
  );
}

export default App;
