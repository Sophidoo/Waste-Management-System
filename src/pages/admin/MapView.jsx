import { useState } from 'react';
import Map from '../../components/ui/Map';

const MapView = () => {
  const [markers, setMarkers] = useState([
    { lat: 37.7749, lng: -122.4194, name: 'San Francisco', color: 'blue' },
    { lat: 37.3382, lng: -121.8863, name: 'San Jose', color: 'green' },
    { lat: 37.8044, lng: -122.2712, name: 'Oakland', color: 'purple' },
  ]);

  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [zoom, setZoom] = useState(11);

  const handleMapClick = ({ lat, lng }) => {
    const newMarker = {
      lat,
      lng,
      name: `Location ${markers.length + 1}`,
      color: 'red'
    };
    setMarkers([...markers, newMarker]);
  };

  const handleMarkerClick = (marker) => {
    alert(`Clicked: ${marker.name}`);
    setCenter({ lat: marker.lat, lng: marker.lng });
    setZoom(15);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Google Maps with React</h1>
      </header>
      
      <div className="flex-grow relative">
        <Map
          center={center}
          zoom={zoom}
          markers={markers}
          onMapClick={handleMapClick}
          onMarkerClick={handleMarkerClick}
        />
      </div>
      
      <div className="bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-2">Markers ({markers.length})</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {markers.map((marker, index) => (
            <li 
              key={index} 
              className="bg-white p-2 rounded shadow cursor-pointer hover:bg-gray-50"
              onClick={() => handleMarkerClick(marker)}
            >
              <span className={`inline-block w-3 h-3 rounded-full bg-${marker.color}-500 mr-2`}></span>
              {marker.name} ({marker.lat.toFixed(4)}, {marker.lng.toFixed(4)})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapView;