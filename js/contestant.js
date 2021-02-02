class Contestant {
    constructor(){
       this.index = null;
      this.answer = null;
      this.name = null;
      this.button = createButton('Submit')
      this.button.position(150,300)
      

    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
    }

    display(){
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestantCount+=1;
            contestant.index = playerCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          });
    }
  }