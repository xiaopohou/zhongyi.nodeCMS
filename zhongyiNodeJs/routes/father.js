module.exports = function(name, age) {
    this.name = name;
    this.age = age;
    this.about = function() {
       return this.age;
    };
};
 