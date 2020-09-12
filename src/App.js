import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notas: [],
			categorias: [],
		};
	}

	criarNota(titulo, texto, categoria) {
		const novaNota = { titulo, texto, categoria };
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

	criarCategoria(novaCategoria) {
		let novoStateCategorias = {
			...this.state,
			categorias: [...this.state.categorias, novaCategoria],
		};
		this.setState(novoStateCategorias);
	}

	render() {
		return (
			<section className='conteudo'>
				<FormularioCadastro
					categorias={this.state.categorias}
					criarNota={this.criarNota.bind(this)}
				/>

				<main className='conteudo-principal'>
					<ListaDeCategorias
						categorias={this.state.categorias}
						criarCategoria={this.criarCategoria.bind(this)}
					/>
					<ListaDeNotas
						notas={this.state.notas}
						deletarNota={this.deletarNota.bind(this)}
					/>
				</main>
			</section>
		);
	}
}

export default App;
