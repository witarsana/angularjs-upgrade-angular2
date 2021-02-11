"use strict";

// Register `phoneDetail` component, along with its associated controller and template

class PhoneDetailController {
  mainImageUrl: string;
  phone: any;

  static $inject = ["$routeParams", "Phone"];
  constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
    const phoneId = $routeParams.phoneId;
    this.phone = Phone.get({ phoneId }, (phone: any) => {
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.module("phoneDetail").component("phoneDetail", {
  templateUrl: "phone-detail/phone-detail.template.html",
  controller: PhoneDetailController,
});
