import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import coordinateDTO from "./coordinates.model";
import { useState } from "react";

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon=defaultIcon;


export default function Maps(props: mapsProps){
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);

    return (
        <MapContainer
            center={[6.542612, 3.356783]} 
            zoom={14}
            style={{height:props.height}}
        >
            <TileLayer attribution="React Movies"
            url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'" /> 
            <MapClick setCoordinates={coordinates =>{
                setCoordinates([coordinates]);
            }} />
            {coordinates.map((coordinate, index) => <Marker key={index}
            position={[coordinate.lat, coordinate.lng]} />)}
        </MapContainer>
    )
}

interface mapsProps {
    height: string;
}

Maps.defaultProps= {
    height:"500px"
}

function MapClick(props: mapClickProps){
    // useMapEvents('click', eventArgs => {
    //     props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
    // })
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates: coordinateDTO):void;
}