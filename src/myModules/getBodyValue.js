class BodyValue {
    constructor(weight, tauxg, activity) {
      this.caloDay = (370+21.6*(1-tauxg)*weight)*activity;
    }
  }
const test = new BodyValue(88, 0.4, 2)