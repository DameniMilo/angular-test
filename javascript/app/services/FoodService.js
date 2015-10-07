angular.module('myAppToTest').service('foodService', FoodService);

function FoodService(isSpicy) {
	var foods = [];
	var markets = [{
		name: 'NoFrills',
		foods: ['Rice', 'Pasta', 'Ice cream', 'Bean', 'Egg']
	},
	{
		name: 'Walmart',
		foods: ['Rice', 'Pasta', 'Ice cream', 'Bean', 'Egg', 'Water']
	},
	{
		name: 'Metro',
		foods: ['Rice', 'Pasta', 'Bean', 'Egg', 'Water']
	},
	{
		name: 'Sobeys',
		foods: ['Ice cream', 'Water']
	},
	{
		name: 'FoodLand',
		foods: ['Rice', 'Pasta', 'Bean', 'Egg']
	}];

	this.add = function(name) {
		var hasFood = false;
		for (var i in foods) {
			if (foods[i].name == name) {
				return true;
			}
		}
		if (!hasFood) {
			foods.push({ name: name, isSpicy: isSpicy });
		}
	};

	this.remove = function(index) {
		foods.splice(index, 1);
	};

	this.getFoods = function() {
		return foods;
	};

	this.getMarketsWithFood = function(foodName) {
		var marketsWithFood = [];
		for (var i in markets) {
			if (markets[i]['foods'].indexOf(foodName) != -1) {
				marketsWithFood.push(markets[i].name);
			}
		}
		return marketsWithFood;
	};

	this.getMarketInfo = function(marketName) {
		for (var i in markets) {
			if (markets[i]['name'] == marketName) {
				return markets[i];
			}
		}
	}
}
