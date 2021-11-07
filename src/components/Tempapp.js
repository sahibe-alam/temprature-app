import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=42dec88815757469aafac9cbc6e6cf1d`
            const response = await fetch(url);

            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
        <div className="layer">
            <div className="box">
                
                <div className="inputData">
                    <input
                        type="search"
                        className="inputFeild" placeholder="Type Your City"
                        onChange={(event) => { setSearch(event.target.value) }} />

                    {!city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div className="info">
                            <h1 className="location">

                                <i class="fas fa-street-view"></i>{search}

                            </h1>
                            <h1 className="temp">
                            <i className="fas fa-thermometer-three-quarters"></i>
                                {city.temp}°C
                            </h1>
                            <h3 className="tempin_max">Min {city.temp_min}°C - Max {city.temp_max}°C
                            </h3>
                          
                        </div>
                        
                    )}


                </div>
            </div>
            <h5 className="sahibe">BY SAHIBE ALAM </h5>
            </div>
        
        </>
    )
}
export default Tempapp