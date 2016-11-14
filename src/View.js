				view = {
					stage:null,
					menu:null,
					game:null,
					canvas:null,
					positions: new Array(),
					lastPlayed:null,
					init:function(stage){
					
						this.stage=stage;
			
						this.setContent();

		


					},
					
					setContent:function()
					{
						this.stage.removeAllChildren();
						this.stage.update();

						displayMsg("loading of game tiles");
						lines=[],
						this.game=new lib.game();
						this.game.x=250;
				        this.game.y=200;
						for(var i=1;i<=3;i++)
				            for(var j=1;j<=3;j++)
				                    lines.push(eval("this.game.l"+i+""+j));
					
						this.positions = lines;
						
						
						
						this.showMenu();
						},
						
					changeColor:function(position,color){
						if(this.positions[position])
					    	this.positions[position].gotoAndPlay(color);
					},
					
					
					showMenu:function(){
						music = playSound("intro");
						displayMsg("initialisation of the menu");
						this.menu = new lib.menu();
						this.menu.y = 200;
				        this.menu.x = 250;
				        this.menu.instance.startBtn.on("click", function()
						{
							music.destroy();
						this.showGame();
						}, this);
					
						this.stage.addChild(this.menu);
					},
					showEnd:function(){
						this.stage.removeChild(this.game);
						this.stage.addChild(this.menu);
					},
					showGame:function(){
						music = playSound("game");
						this.stage.removeChild(this.menu);
						this.stage.addChild(this.game);
					},
					showWin:function()
					{
						winner = new lib.win();
						winner.setTransform(274.7,215.8);
						this.stage.addChild(winner);
					//	canvas.addEventListener("dblclick",controler.startGame(),false);
					},
						showLost:function()
					{
						lost = new lib.lost();
						lost.setTransform(276.7,162.4);
						this.stage.addChild(lost);
					},
					getPosition:function(position)
					{
						return this.positions.indexOf(position);
					},
					updateModel:function(model){
						displayMsg("view observer is notified");
					
						lastPlayed=model.getLastPlayed();
						if(this.lastPlayed != lastPlayed)
						{
							this.changeColor(lastPlayed.position,lastPlayed.color);
							this.lastPlayed = lastPlayed;
						}	
						if(model.isFinished())
						{
							if(winner=model.getWinner())
							{
								this.game.gotoAndPlay("l"+winner.line+"");
								console.log(String(winner.line));
								if(winner.winner)
									this.showWin();
								else
									this.showLost();

							}else{
							this.showEnd();
							}

									setTimeout(function(){
							  location.reload();
								}, 	6000);
								
						}

						
					},
					test:function(){displayMsg("view view view");}
					
				};
