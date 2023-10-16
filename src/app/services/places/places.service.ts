import {Injectable} from '@angular/core';

/**
 * Model place
 *
 * Měl by existovat ve složce models
 * Zde ale dává větší logiku, proto jej nechávám zde
 * Je zde vše více ucelenější
 */
export interface Place {
  latitude: number;
  longitude: number;
  name: string;
  homepage: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  /**
   * Základní místa v aplikaci
   *
   * @private
   */
  private privatePlaces: Place[] = [
    {
      latitude: 28.6472799,
      longitude: 28.6472799,
      name: 'Dehli, India',
      homepage: true,
    },
    {
      latitude: -5.7759362,
      longitude: 106.1174957,
      name: 'Jakarta, Indonesia',
      homepage: false,
    },
    {
      latitude: 51.5287718,
      longitude: -0.2416815,
      name: 'London, UK',
      homepage: true,
    },
    {
      latitude: 40.6976701,
      longitude: -74.2598666,
      name: 'New York, USA',
      homepage: false,
    },
    {
      latitude: 48.8589507,
      longitude: 2.2770202,
      name: 'Paris, France',
      homepage: false,
    },
    {
      latitude: 37.757815,
      longitude: -122.5076401,
      name: 'San Francisco, USA',
      homepage: false,
    }
  ];

  /**
   * Available places
   *
   * Setter pro získání míst
   * Uvnitř settrů je možné volat funkce třídy, například init atd...
   * Využití to má třeba pro user$ kdy se vrací observable pattern, ale init pro získání dat se zavolá až je potřeba
   * Následně pak všude kde je použito je vše plně dynamické skrze Observable pattern a vše lze propsat mezi N stránkami
   *
   * Zde je obyčejná implementace získání dat z proměnné
   */
  get places() {
    return this.privatePlaces;
  }

  constructor() {
  }

  /**
   * Set home visibility
   *
   * Nastaví zobrazení na domovské obrazovce
   * Není setter, je funkce. Setter umí příjmout maximálně 1 attribut
   *
   *
   * @param index
   * @param active
   */
  setHome(index: number, active: boolean) {
    this.privatePlaces[index].homepage = active;
  }
}
