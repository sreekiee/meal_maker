// c stands for checkpoints
// eg: c1, c2 ...

const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },
  // c1
  set appetizers(appetizer){
  	this._courses._appetizers.push(appetizer);
	},

  get appetizers(){
    return this._courses._appetizers;
  },
  // c2
  set mains(main){
  	this._courses._mains.push(main);
	},

  get mains(){
    return this._courses._mains;
  },
  // c3
  set desserts(dessert){
  	this._courses._desserts.push(dessert);
	},

  get desserts(){
    return this._courses._desserts;
  },
  // c4
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  // c5
  addDishToCourse(courseName, dishName, dishPrice){
    let dish =  {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
  },
  // c6
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let rand = Math.floor(Math.random() * dishes.length);

    return dishes[rand];
  },
  // c7
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('_appetizers');
    let main = this.getRandomDishFromCourse('_mains');
    let dessert = this.getRandomDishFromCourse('_desserts');
    let total = 0;
    total = appetizer.price + main.price + dessert.price;

    return `${appetizer.name}, ${main.name}, ${dessert.name} - Total price is ${total}`;
  }
};
// c8

menu.addDishToCourse('_appetizers', 'Chicken Tikka', 4);
menu.addDishToCourse('_appetizers', 'Chicken Tandoori', 5);
menu.addDishToCourse('_appetizers', 'Roast Beef', 5);

menu.addDishToCourse('_mains', 'Noodles', 6);
menu.addDishToCourse('_mains', 'Biryani', 7);
menu.addDishToCourse('_mains', 'Pizza', 8);

menu.addDishToCourse('_desserts', 'Pan', 1);
menu.addDishToCourse('_desserts', 'Cream', 2);
menu.addDishToCourse('_desserts', 'Sweet', 4);

console.log(menu.generateRandomMeal());

console.log(menu.courses);
