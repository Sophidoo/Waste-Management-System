import GoogleMapReact from 'google-map-react';

const Marker = ({ text, color }) => (
  <div className="relative">
    <div 
      className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-white flex items-center justify-center text-white font-bold shadow-lg`}
    >
      {text}
    </div>
    <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-${color}-500`}></div>
  </div>
);

const Map = ({ center, zoom, markers, onMapClick, onMarkerClick }) => {
  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={onMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            text={marker.name[0]} // First letter of location name
            color={marker.color || 'red'}
            onClick={() => onMarkerClick(marker)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
  zoom: 11,
  markers: [],
};

export default Map;