class Food {
    constructor(foodS){
        this.image = loadImage("Milk.png");
        this.foodS = 0;        
        this.lastFed ;   
    }
    
    getFoodStock(){      
        return this.foodS;
    }
    updateFoodStock(foodS){
        
        this.foodStock=foodStock;

    }
    getFedTime(lastFed){
        this.lastFed=lastFed;
      }

    deductFood(){
        if(this.foodS > 0){
            this.foodS=this.foodS-1;

        } 
    }
  
    display(){ 
        var x=700,y=100; 
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodS!=0){ 
            for(var i=0;i<foodS;i++){
                 if(i%10==0){ 
                    x=80; 
                    y=y+50; 
                } 
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
    }             
        




}