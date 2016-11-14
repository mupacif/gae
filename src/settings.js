
	Observer.call(view);
	Observable.call(model);

	model.addObserver(view);
	model.addObserver(controler);