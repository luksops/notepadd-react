import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notas: [],
		};
	}

	criarNota(titulo, texto) {
		const novaNota = { titulo, texto };
		const novoArrayNotas = [...this.state.notas, novaNota];
		const novoState = {
			notas: novoArrayNotas,
		};
		this.setState(novoState);
	}

	deletarNota(indice) {
		let stateAtual = this.state.notas;
		stateAtual.splice(indice, 1);
		this.setState({ notas: stateAtual });
	}

	render() {
		return (
			<section className='conteudo'>
				<FormularioCadastro criarNota={this.criarNota.bind(this)} />
				<ListaDeNotas
					notas={this.state.notas}
					deletarNota={this.deletarNota.bind(this)}
				/>
			</section>
		);
	}
}

export default App;
