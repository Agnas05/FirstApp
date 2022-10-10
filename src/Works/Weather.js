import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from 'react-apexcharts';
import rainy from './rainy.jpg';
import sunny from './sunny.jpg';
import cloudy from './cloudy.jpg';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'antd';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Weather = () => {

  const [location, setlocation] = useState();
  const [data, setData] = useState({})
  const [place, setPlace] = useState([])
  const [tempt, setTempt] = useState([])
  // let componentMounted = true;

  const settingData = (e) => {
    e.preventDefault();
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.loc}&appid=84ad7f8255a7b3befd30c973b3859cea`
    // useEffect(() => {

    //   const fetchWeather = async () => {
    //     const response = await fetch(url);
    //     if (componentMounted) {
    //       setData({
    //         name: response.data.name,
    //         temp: response.data.main.temp,
    //       })
    //       setPlace([...place, response.data.name]);
    //       setTempt([...tempt, response.data.main.temp]);
    //       console.log("this is data", data)
    //     }
    //     return () => {
    //       componentMounted = false;
    //     }
    //   }
    //   fetchWeather();
    // }, [location.loc]);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=84ad7f8255a7b3befd30c973b3859cea`)
      .then((response) => {
        // console.log(response.data)

        setData({
          name: response.data.name,
          temp: response.data.main.temp,

        })
        setPlace([...place, response.data.name])// console.log(place)
        setTempt([...tempt, (response.data.main.temp - 273.15).toFixed(2)])// console.log(tempt)

        console.log(data)
        setlocation("")
      })

  }
  const DataChange = (e) => {
    // alert(e.target.value);
    let value = e.target.value
    setlocation(value)
    // setlocation({ ...location, loc: value })
  }
  console.log("loc", location);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{marginRight:20}} to="/">Home</Link>
            </nav>
            </Container>
            </Navbar>
      <img style={{ width: 1263, height: 800, position: "absolute" }} src={require("../images/bluepurple.png")} />
      <div className="DisplayWeather" style={{ padding: 30 }}>
        <div className=" justify-content-center">

          <form style={{ marginTop: "20px", width: "500px", marginLeft: "35" }}>
            <div className="input-group mb-4 w-100 mx-auto">
              <input type="text"
                name="city"
                className="form-control"
                placeholder=" city"
                // aria-label="location city"
                value={location}
                onChange={(e) => DataChange(e)} />
              <Button type="primary"
                style={{
                  width: 76,
                  marginTop: 5,
                  padding: -21,
                  height: 47
                }} htmlType="submit"
                // className="input"
                onClick={(e) => settingData(e)}>Search</Button>
            </div>
          </form>

          {typeof data.temp !== "undefined" ?
            <div className="row">
              <div className="col-5" style={{ marginLeft: "20" }}>
                <div className="card text-center border-0"
                  style={{ marginTop: "20px", width: "400px" }}>
                  <img className="card-img" style={{ height: "500px" }} src={(data.temp - 273.15) < 19 ? (rainy) : ((data.temp - 273.15) < 22) ? (cloudy) : (sunny)} alt="Card image" />
                  <div className="card-img-overlay">
                    <div className="bg-dark py-4 w-100 mx-auto" style={{ marginTop: "50px" }} >
                      <h2 className="card-title" style={{ color: "#61dafb" }}>{data.name}</h2>

                      <h1 className="fw-bolder mb-5" style={{ color: "#61dafb" }}>{(data.temp - 273.15).toFixed(2)}°C</h1>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ marginTop: 20, float: "left" }}>
                <ReactApexChart
                  type="bar"
                  height={550}
                  colors="black"

                  options={
                    {
                      colors: ['#0985e3'],

                      xaxis: {
                        tickPlacement: 'on',
                        categories: place,

                      },
                      yaxis: {
                        // title: {
                        //     text: "Temperature"
                        // }
                      },
                      plotOptions: {
                        bar: {
                          borderRadius: 7,
                          endingShape: 'rounded',
                          columnWidth: '70%',
                          dataLabels: {
                            orientation: "vertical"
                          }
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      fill: {
                        type: "gradient",
                        gradient: {
                          shade: 'light',
                          type: 'horizontal',
                          shadeIntensity: 0.25,
                          gradientToColors: undefined,
                          inverseColors: true,
                          opacityFrom: 0.85,
                          opacityTo: 0.85,
                          stops: [50, 0, 100]
                        }
                      },
                      stroke: {
                        colors: ['#0080ff'],
                        width: 2
                      },
                      grid: {
                        row: {
                          colors: ['#fff', '#f2f2f2']
                        }
                      },

                    }
                  }
                  series={[
                    {
                      name: "Temperature",
                      data: tempt
                    },

                  ]} />
              </div>
            </div> : ('')
          }

        </div>
        {/* <Nav className="me-auto" style={{position: "absolute", top: 12, marginLeft: 1140}}>
        <Button type="primary" >
          <Nav.Link style={{ padding: 0 }} href="/works">Back</Nav.Link>
        </Button>
      </Nav> */}

      </div>
    </>
  )
}
export default Weather;