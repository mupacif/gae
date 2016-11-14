		controler = {
				model:null,
				view:null,
				init:function(){},
				startGame:function()
				{
					alert("clicked");
				
				setTimeout(function(){
	   // location.reload();
		}, 	20000);
					location.reload();
				},
				play:function(tile)
				{
					if(!model.isFinished())
					{
					 index = view.getPosition(tile);
					
					 if(index!=-1)
						this.playRed(index);
					}
				},
				
				playBlue: function()
				{  
					displayMsg("ia playing");
					//list of free positions
					frees = model.getFreePositions();
					if(frees)
					{
						//take randomly one positon in the free positions
				    	index = Math.floor(Math.random() * frees.length);

				    	//play that position
						model.play(frees[index],this.idle);
					}
					
				},
				playRed: function(index)
				{
					model.play(index,this.playBlue);
				},
				updateModel:function(obsevable)
				{
					displayMsg("controler called");
					//if(obsevable.isFinished())
						//alert("Game is finished");
				},
				idle:function()
				{
					console.log("")
				}
			}