class Question{
    constructor(){
        this.title = createElement('h2')
        this.question = createElement('h3')
        this.option1 = createElement('h3')
        this.option2 = createElement('h3')
        this.option3 = createElement('h3')
        this.input1 = createInput("Answer");
        this.input2 = createInput("Name");

    }

    display(){
        this.title.html("My Amazing Quiz Game")
        this.title.position(350,0)

        this.question.html("Question: What is the largest animal on earth ???")
        this.question.position(150,80)
        this.option1.html("1) Giraffe")
        this.option1.position(150,100)
        this.option2.html("2) Elephant")
        this.option2.position(150,120)
        this.option3.html("3) Whales")
        this.option3.position(150,140)

        this.input2.position(150,230)
        this.input1.position(370,230)
    }
}