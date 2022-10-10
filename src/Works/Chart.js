import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Checkbox, Form, Input } from 'antd';

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
  
      position: 'middle',
    
      layout: [
      
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
  <>
  <Navbar bg="dark" variant="dark">
  {/* <Nav className="me-auto" style={{position: "absolute", top: 12, marginLeft: 1140}}> */}
  {/* <Button type="primary" > */}
<Nav.Link style={{padding:0,marginLeft:20,color:"blue"}}href="/home">Home</Nav.Link>

  {/* </Button> */}
{/* </Nav> */}
</Navbar>
  <img style={{ position: 'absolute',zIndex:-1, width: 1349 }} src={require("../images/zuGOUB.jpg")} />
  <Column {...config} />
  
</>);
};

ReactDOM.render(<Chart />, document.getElementById('root'));
export default Chart;