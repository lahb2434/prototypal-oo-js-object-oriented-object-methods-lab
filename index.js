// In index.js, write a constructor function called BoardMember that sets the following properties: name, homeState, and training.

// Add following methods to the class: - veto — returns No, I must disagree
// approve — returns You can do that!
// doCharity — returns I like to help people.
// releasePressStatement — returns You will see great things from Scuber.
// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.

function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;

    this.veto = () => (
        'No, I must disagree'
    )

    this.approve = () => (
        'You can do that!'
    )

    this.doCharity = () => (
        'I like to help people.'
    )

    this.releasePressStatement = () => (
      "You will see great things from Scuber."
    )

    this.sayHi = () => (
        `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    )
}