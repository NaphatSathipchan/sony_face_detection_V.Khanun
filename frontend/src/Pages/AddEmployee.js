import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import BTTabbar from "../Components/Tabbar/BTTabbar";
import BTTransactionCard from "../Components/Card/BTTransactionCard";
import axios from 'axios';
import Picture from "../Components/AddEmp/Picture";
import Profile from "../Components/AddEmp/Profile";
export default function AddEmployee(){
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.2:8000/api/AddEmployee');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

  return (
      <div className='flex min-h-[100vh] bg-[#F5F8FF] font-Kanit'>
            <div className="flex flex-[0.1] items-center content-center justify-center">
                    <BTTabbar />
            </div>
        <div style={{width: 1440, height: 1024, position: 'relative', background: '#F5F8FF'}}>
  <div style={{width: 1284, height: 930, left: 141, top: 31, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 14}} />
  <div style={{left: 187, top: 57, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Kanit', fontWeight: '500', wordWrap: 'break-word'}}>Add Employee</div>
  <div className="flex flex-[0.1] items-center content-center justify-center">
                    <Picture />
            </div>
  
  <div className="flex flex-[0.1] items-center content-center justify-center">
                    <Profile />
            </div>
      </div>
      </div>
    )
}