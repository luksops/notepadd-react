export default class Categorias {
	constructor() {
		this.categorias = [];
		this._observers = [];
	}

	subscribe(func) {
		this._observers.push(func);
	}

	unSubscribe(func) {
		this._observers.filter((obs) => obs !== func);
	}

	notify() {
		this._observers.forEach((func) => func(this.categorias));
	}

	criarCategoria(novaCategoria) {
		this.categorias.push(novaCategoria);
		this.notify();
	}
}
