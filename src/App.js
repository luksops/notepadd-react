import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';
import Categorias from './data/Categorias';
import StateNotas from './data/StateNotas';

class App extends Component {
	constructor() {
		super();
		this.categoria = new Categorias();
		this.notas = new StateNotas();
	}

	render() {
		return (
			<section className='conteudo'>
				<FormularioCadastro
					categorias={this.categoria}
					criarNota={this.notas.criarNota.bind(this.notas)}
				/>

				<main className='conteudo-principal'>
					<ListaDeCategorias
						categorias={this.categoria}
						criarCategoria={this.categoria.criarCategoria.bind(this.categoria)}
					/>
					<ListaDeNotas
						notas={this.notas}
						deletarNota={this.notas.deletarNota.bind(this.notas)}
					/>
				</main>
			</section>
		);
	}
}

export default App;
