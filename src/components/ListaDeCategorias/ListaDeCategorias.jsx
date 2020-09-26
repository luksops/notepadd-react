import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
	constructor() {
		super();
		this.state = { categorias: [] };
		this._referenceForUpdateView = this._updateView.bind(this);
	}

	componentDidMount() {
		this.props.categorias.subscribe(this._referenceForUpdateView);
	}

	componentWillUnmount() {
		this.props.categorias.unSubscribe(this._referenceForUpdateView);
	}

	_updateView(categorias) {
		let newState = { ...this.state, categorias };
		this.setState(newState);
	}

	_handlerEventoInput(evento) {
		if (evento.key === 'Enter') {
			this.props.criarCategoria(evento.target.value);
			evento.target.value = '';
		}
	}

	render() {
		return (
			<section className='lista-categorias'>
				<ul className='lista-categorias_lista'>
					{this.props.categorias.categorias.map((categorias, index) => {
						return (
							<li key={index} className='lista-categorias_item'>
								{categorias}
							</li>
						);
					})}
				</ul>
				<input
					type='text'
					className='lista-categorias_input'
					placeholder='Adicionar categoria'
					onKeyUp={this._handlerEventoInput.bind(this)}
				/>
			</section>
		);
	}
}

export default ListaDeCategorias;
