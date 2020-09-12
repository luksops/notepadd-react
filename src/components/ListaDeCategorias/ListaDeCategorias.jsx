import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
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
					{this.props.categorias.map((categorias, index) => {
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
