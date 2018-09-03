var People = function(config) {
  this.name = config.name;
  this.age = config.age;
  this.job = config.job;
};

var nick = new People({ name: 'Alex', age: '27', job: 'Front-end developer' });

console.log(nick.name);
console.log(nick.age);
console.log(nick.job);
