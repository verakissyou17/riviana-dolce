import {deliveryOptions} from "../data/deliveryOptions";

export function getDeliveryOptionById(id) {
  return deliveryOptions.find((option) => option.id === id);
}


