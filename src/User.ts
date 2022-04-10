import {randFirstName} from '@ngneat/falso';
import { Mappable } from './CustomMap';

export default class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string;

  constructor() {
    this.name = randFirstName();
    this.location = {
      lat: 0,
      lng: 0,
    };
  }

  markerContent(): string {
      return 'mapper content'
  }
}
