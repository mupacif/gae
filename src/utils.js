
			function checkVictory(gameTab)
			{
				displayMsg("check victory");
				tab =[
				[0,1,2],
				[3,4,5],
				[6,7,8],

				[0,3,6],
				[1,4,7],
				[2,5,8],

				[0,4,8],
				[2,4,6],
				];

				winner = {"winner":null,"line":-1};
				outRed = false;
				outBlue = false;
				for(i=0;i<tab.length;i++)
				{
					p1= tab[i][0];
					p2= tab[i][1];
					p3= tab[i][2];

					outRed = checkLine(gameTab,p1,p2,p3,1)
					if(outRed)
						return {"winner":1,"line":i+1};
					outBlue = checkLine(gameTab,p1,p2,p3,0)
					
					if(outBlue)
						return {"winner":0,"line":i+1};
				}
				return null;

			}
			function checkLine(tab,p1,p2,p3,val)
			{
				out=false;
				if(tab)
				{
					out = tab[p1]==val && tab[p2]==val && tab[p3]==val;

				}

				return out;
			}

			function displayMsg(msg)
			{
				console.log(msg);
			}