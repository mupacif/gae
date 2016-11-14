	var Observer = function()
	{this.update= function(Observable){displayMsg("Observer notified"); this.updateModel(Observable);};}

	var Observable = function()
	{
	this.observers=new Array();
	this.notify= function()
	{
			displayMsg("notification of "+this.observers.length+" observers");
		for(var i=0;i<this.observers.length;i++)
				this.observers[i].updateModel(this);
		

	}
	this.addObserver = function(Observer)
	{
		this.observers.push(Observer);
		Observer.updateModel(this);
	}
		}