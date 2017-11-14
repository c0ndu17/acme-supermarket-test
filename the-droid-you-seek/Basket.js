// Basket: FR1, SR1, FR1, CF1
// Total price expected: £19.34

// Basket: FR1, FR1
// Total price expected: £3.11

// Basket: SR1, SR1, FR1, SR1
// Total price expected: £16.61
//


function Basket(pricingRules) {
  this.items = {};
  this.pricingRules = pricingRules;
}

/***
 * Adds an item to a basket
 */
Basket.prototype.add = function(item) {
  if (!this.items[item]) {
    this.items[item] = 0;
  }
  this.items[item] ++;

};

/***
 * Remove an item... because I can
 */
Basket.prototype.remove = function(item) {
  if (!this.items[item]) {
    return;
  }
  this.items[item]--;
};

/***
 * Returns the total amount of the basket
 */
Basket.prototype.total = function() {
  var total = 0;
  var productCodes = Object.keys(this.pricingRules);

  productCodes.forEach(function(productCode) {

    if (productCode === 'FR1') {
      var maximize =  parseInt(this.items[productCode] /  2);
      total += ( maximize + (this.items[productCode] - ( 2 * maximize))) * this.pricingRules[productCode];
    } else if (productCode === 'SR1' && this.items[productCode] >= 3) {
      total += this.items[productCode] * 4.5; // Y'all said you're pricing rules change, not the discount value;
    } else if (this.items[productCode] > 0 ) {
      total += (this.items[productCode]  * this.pricingRules[productCode]);
    }

  }.bind(this));



  return total;
};

module.exports = Basket;
