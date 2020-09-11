import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css';
class ListaDeNotas extends Component {
	render() {
		return (
			<ul className='lista-notas'>
				{this.props.notas.map((objeto, index) => {
					return (
						<li className='lista-notas_item' key={index}>
							<CardNota
								indice={index}
								textoNota={objeto.texto}
								tituloNota={objeto.titulo}
								deletarNota={this.props.deletarNota}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}
export default ListaDeNotas;
