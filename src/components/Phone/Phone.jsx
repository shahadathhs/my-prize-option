import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Phone = () => {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const phoneData = data.data.data;
      const phoneWithFakeData = phoneData.map(phone => {
        const obj = {
          name: phone.phone_name,
          prize: parseInt(phone.slug.split('-')[1])
        }
        return obj;
      })
      console.log(phoneWithFakeData)
      setPhone(phoneWithFakeData);
    }
  )}, [])

  return (
    <div>
      <BarChart width={1200} height={400} data={phone}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="prize" fill="#8884d8" />
        <Tooltip />
      </BarChart>
    </div>
   );
};

export default Phone;