export default class StateNotas {
	constructor() {
		this.notas = [];
		this._observers = [];
	}

	subscribe(func) {
		this._observers.push(func);
	}

	unSubscribe(func) {
		this._observers.filter((obs) => obs !== func);
	}

	notify() {
		this._observers.forEach((func) => func(this.notas));
	}

	criarNota(titulo, texto, categoria) {
		let nota = new Nota(titulo, texto, categoria);
		this.notas.push(nota);
		this.notify();
	}

	deletarNota(indice) {
		this.notas.splice(indice, 1);
		this.notify();
	}
}

class Nota {
	constructor(titulo, texto, categoria) {
		this.titulo = titulo;
		this.texto = texto;
		this.categoria = categoria;
	}
}
