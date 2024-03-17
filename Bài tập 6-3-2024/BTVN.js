//tạo lớp Pet
class Pet {
    constructor(name) {
      this.name = name;
    }  
    talk(sound) {
      console.log(sound);
    }
    introduce() {
      console.log(`Tôi tên là ${this.name}`);
    }
}
class Dog extends Pet {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
    animalType() {
      console.log(`Tôi là động vật & ${this.type}`);
    }
    introduce() {
      super.introduce(); 
      this.animalType(); 
    }
}
  var myPet = new Pet("Thiện");
  myPet.introduce(); 
  myPet.talk("ẳng ẳng"); 
  var myDog = new Dog("Lu", "Chó");
  myDog.introduce(); 
  myDog.talk("gâu gâu"); 

//chuyển function sang class
class Konstruktor {
    constructor(val) {
        this.properties_2 = 'bubble';
        this.properties_3 = val;
    }
}
 var obj = new Konstruktor('bub');
 alert(obj.properties_3);

//tìm số chẵn trong 1 mảng sử dụng hàm callback
var arr = [1,2,3,4,5,6,7,8,9]
function Sochan(arr) {
    return arr% 2 == 0;
}
var result = arr.filter(Sochan);
console.log(result);