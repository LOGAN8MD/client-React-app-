import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DisplayUser() {
  const [user, setUser] = useState([]);
  const [dogImage, setDogImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // const url="http://localhost:8888"
  const url="https://server-node-express-backend.onrender.com"
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`${url}/api/user`);
       
        
        setUser(userRes.data);
        console.log(userRes.data);
        let pic=[]
        for(let i=0;i<userRes.data.length;i++){
          const dogRes = await axios.get('https://dog.ceo/api/breeds/image/random');
          pic.push(dogRes.data.message)
        }
        setDogImage(pic)
        
        
        // setDogImage(dogRes.data.message);
       
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    return Math.floor(ageDiff / (365.25 * 24 * 60 * 60 * 1000));
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!user) return <p className="text-center mt-5">No user found.</p>;

  return (
    <>
    <div className="container mt-5">
    <div className="row">
      {user.map((u,index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100 text-center shadow">
            <div className="card-body">
              <img src={dogImage[index]} alt="image" className="rounded-circle mb-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <h5 className="card-title">{u.firstName} {u.lastName}</h5>
              <p className="card-text">DOB: {u.dob}</p>
              <p className="card-text">Age: {calculateAge(u.dob)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
       <button className="btn btn-secondary mt-2" onClick={() => navigate('/')}>Go Back</button>
    </div>
   </div>
    
    </>
  );
}