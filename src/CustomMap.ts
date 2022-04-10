import User from './User';
import Company from './Company';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  color:string;
  markerContent():string;

}
export default class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    const mapOptions: google.maps.MapOptions = {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    };

    this.googleMap = new google.maps.Map(
      document.getElementById('map'),
      mapOptions
    );
  }

  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: '',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

export { Mappable };
