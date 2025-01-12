 
# API Documentation


This is the API documentation for the Weather API service.

## Base URL
`http://localhost:3000/weather`

### External API Host
This API uses the **Weather API** hosted on **RapidAPI**:

`open-weather13.p.rapidapi.com`

 
Here are the headers required for all requests:

X-Rapidapi-Key: f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026
X-Rapidapi-Host: open-weather13.p.rapidapi.com


## Endpoints

### 1. Search weather by city

**URL**: `http://localhost:3000/weather/city/catanduanes/EN`

**Method**: `GET`

#### Query Parameters:
- city = cavite

**Response**:
```json

{
    "location": {
        "city": "catanduanes",
        "country": "PH",
        "coordinates": {
            "latitude": 13.7594,
            "longitude": 121.06
        }
    },
    "weather": {
        "condition": "Clouds",
        "description": "overcast clouds",
        "iconUrl": "http://openweathermap.org/img/wn/04d@2x.png"
    },
    "temperature": {
        "current": "79.72°C",
        "feelsLike": "79.72°C",
        "min": "79.72°C",
        "max": "79.72°C"
    },
    "wind": {
        "speed": "10.78 m/s",
        "direction": "50°"
    },
    "visibility": "10000 meters",
    "pressure": "1013 hPa",
    "humidity": "80%",
    "sunrise": "6:22:23 AM",
    "sunset": "5:45:07 PM"
}

### Endpoint: Get lat/lon

### 2. get the weather lat lon


### Method: `GET`
### URL: `/latlon`
This endpoint retrieves information about weather getting latlon.

#### Full Request Example:

http://localhost:3000/weather/latlon/14.32944/120.93667




#### Query Parameters:
- lat/ lon

**Response**:

```json

{
    "location": {
        "city": "Dasmariñas",
        "country": "PH",
        "coordinates": {
            "latitude": 14.3294,
            "longitude": 120.9367
        }
    },
    "weather": {
        "condition": "Clouds",
        "description": "overcast clouds",
        "iconUrl": "http://openweathermap.org/img/wn/04d@2x.png"
    },
    "temperature": {
        "current": "26.84°C",
        "feelsLike": "29.39°C",
        "min": "26.73°C",
        "max": "27.91°C"
    },
    "wind": {
        "speed": "5.52 m/s",
        "direction": "54°"
    },
    "visibility": "10000 meters",
    "pressure": "1014 hPa",
    "humidity": "80%",
    "sunrise": "6:23:50 AM",
    "sunset": "5:44:39 PM"
}


