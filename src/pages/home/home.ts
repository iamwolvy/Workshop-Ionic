import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";

import { RestaurantsProvider } from "../../providers/restaurants/restaurants";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  restaurants: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,

    public _restaurantsService: RestaurantsProvider
  ) {
    this._restaurantsService.getRestaurantByLatLong('13.0776', '80.2164')
      .then((response:any) => {
        console.log(response);
        this.restaurants = response.nearby_restaurants;
      }).catch((err) => {
        console.log(err);
      });
  }
}
