class Animals {
constructor(name, sound) {
    this.name = name;
    this.sound = sound;   
}
getName() {
    return this.name;
}
getSound() {
return this.sound;
}

print(){
console.log(`name : ${this.getName()} sound : ${this.getSound()}`)
}
}

let a1 = new Animals('cow', 'moo');
let a2 = new Animals('dog', 'Hb');
let a3 = new Animals('rooster', 'Kokoriko');

a1.print();
a2.print();
a3.print();