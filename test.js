var Basket = require('./Basket.js');

var pricingRules = {
  'FR1': 3.11,
  'SR1': 5,
  'CF1': 11.23
};

var basket = new Basket(pricingRules);

basket.add('SR1');
basket.add('SR1');
basket.add('FR1');
basket.add('SR1');

console.log(basket.total());
