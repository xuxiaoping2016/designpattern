class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showName(){
        console.log(this.name)
    }

    showAge(){
        console.log(this.age)
    }
}


class Student extends Person{
    constructor(name,age,number){
        super(name,age)

        this.number = number;
        this.grilfriend = "hjkl"
    }

    study(){
        console.log(this.number)
    }
}


const p = new Person("john",89);
console.log(p)

const s = new Student("xu",27,5678)
console.log(s)