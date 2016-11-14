			model = {
					tour: 0,
					finished: false,
					winner: null,
					played: [],
					lastPlayed: 0,
					init:function()
					{
					this.tour= 0;
					this.finished= false;
					this.winner= null;
					this.played= [];
					this.lastPlayed= 0;
					},
					play: function(index, callback)
					{
					console.log("model: tour ("+this.tour+") ~~ index ="+index+"/"+(typeof this.played[index] === "undefined"));
					if(this.tour<=8 && index!=-1 && (typeof this.played[index] === "undefined"))
					{
						this.tour++;
						 console.log("you played position : "+index);
						color=0;
						if(this.tour%2)
						{
							color=1;
						
							this.played[index]= 1;
						}
						else
						{
							color=0;
							this.played[index]= 0;
						}
						
						this.lastPlayed={"position":index,"color":color?"red":"blue"};
						 if(this.tour>3)
			    			this.check();
						this.notify();	
								if(typeof callback === "function") {
			   				console.log("model::robot play");
			        		callback();
			    		}

			    		
				
			    	}

						
				
				
			  
			    		
					},
					getLastPlayed:function(){return this.lastPlayed},
					//contains: function(position){},
					check: function(){
						out = checkVictory(this.played);
						if(out)
						{
							console.log("victory");
							this.winner = out;
							this.finished = true;
							//this.notify();
							return true;
						}
					 	if(this.tour>8)
							this.finished=true; 


						return false;
					},
					getFreePositions:function()
					{
						free=[];
						for(i=0;i<9;i++)
						{
							if(typeof this.played[i] === "undefined")
								free.push(i);
						}
						return free;
					},
					isFinished:function()
					{
						return this.finished;
					},
					getWinner:function()
					{
						if(this.finished)
						  return this.winner;

						return null;
					}
				};
