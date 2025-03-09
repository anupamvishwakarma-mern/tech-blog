import React, { useEffect, useState, useRef } from "react";

export const GeoLocationAroundMe = () => {
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const [targetLocation, setTargetLocation] = useState({
    lat: 28.43773444502304,
    lng: 77.03450779458832,
  });
  const [userLocation, setUserLocation] = useState(null);

  const mapRef = useRef(null); 
  const markerRef = useRef(null);
  const userMarkerRef = useRef(null);
  const circleRef = useRef(null);

  const moveTargetTowardsUser = () => {
    if (!userLocation) return;

    const stepSize = 0.00001;

    const latDiff = userLocation.lat - targetLocation.lat;
    const lngDiff = userLocation.lng - targetLocation.lng;

    if (Math.abs(latDiff) < stepSize && Math.abs(lngDiff) < stepSize) {
      return;
    }

    setTargetLocation((prev) => ({
      lat: prev.lat + (latDiff * stepSize) / Math.abs(latDiff + lngDiff),
      lng: prev.lng + (lngDiff * stepSize) / Math.abs(latDiff + lngDiff),
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveTargetTowardsUser();
    }, 500);
    return () => clearInterval(interval);
  }, [userLocation]);

  function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: 28.43808524685867,
            lng: 77.03587831259212,
          };
          callback(userLocation);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by browser.");
    }
  }

  function calculateDistance(loc1, loc2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371e3;
    const lat1 = toRad(loc1.lat);
    const lat2 = toRad(loc2.lat);
    const deltaLat = toRad(loc2.lat - loc1.lat);
    const deltaLng = toRad(loc2.lng - loc1.lng);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  function initMap(userLocation) {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: userLocation,
      zoom: 15,
    });
    mapRef.current = map;

    const distance = calculateDistance(userLocation, targetLocation);

    const markerColor =
      distance <= 100
        ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        : "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    const userMarker = new google.maps.Marker({
      position: userLocation,
      map,
      title: "You are here!",
    });
    userMarkerRef.current = userMarker;

    const targetMarker = new google.maps.Marker({
      position: targetLocation,
      map,
      icon: markerColor,
      title: `Target Location (${distance.toFixed(2)} meters away)`,
    });
    markerRef.current = targetMarker;

    const circle = new google.maps.Circle({
      center: userLocation,
      radius: 100,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
    });
    circleRef.current = circle;
  }

  function updateMap(userLocation) {
    if (!mapRef.current || !markerRef.current) return;

    const distance = calculateDistance(userLocation, targetLocation);
    const markerColor =
      distance <= 100
        ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        : "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    markerRef.current.setPosition(targetLocation);
    markerRef.current.setIcon(markerColor);
  }

  useEffect(() => {
    if (window.google) {
      setIsGoogleLoaded(true);
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          setIsGoogleLoaded(true);
          clearInterval(interval);
        }
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (isGoogleLoaded) {
      getLocation((userLocation) => {
        setUserLocation(userLocation);
        if (!mapRef.current) {
          initMap(userLocation);
        } else {
          updateMap(userLocation);
        }
      });
    }
  }, [isGoogleLoaded, targetLocation]);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};
