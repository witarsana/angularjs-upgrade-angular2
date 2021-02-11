"use strict";
// Register `phoneDetail` component, along with its associated controller and template
class PhoneDetailController {
    constructor($routeParams, Phone) {
        const phoneId = $routeParams.phoneId;
        this.phone = Phone.get({ phoneId }, (phone) => {
            this.setImage(phone.images[0]);
        });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}
PhoneDetailController.$inject = ["$routeParams", "Phone"];
angular.module("phoneDetail").component("phoneDetail", {
    templateUrl: "phone-detail/phone-detail.template.html",
    controller: PhoneDetailController,
});
//# sourceMappingURL=phone-detail.component.js.map