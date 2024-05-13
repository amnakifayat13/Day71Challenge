// Class access Modifier:
// Public
class MyClassPublic{
    public name : string;
    constructor(name:string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name);
 // Private
 class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); 
    }
}

const instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret();
//Protected
class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parent1 = new Parent("Smith");
const child = new Child("Johnson");

child.introduceFamily();
