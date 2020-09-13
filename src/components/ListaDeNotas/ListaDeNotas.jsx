import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css';
class ListaDeNotas extends Component {
	constructor() {
		super();
		this.state = { notas: [] };
		this._referenceForUpdateView = this._updateView.bind(this);
	}

	componentDidMount() {
		this.props.notas.subscribe(this._referenceForRefreshView);
	}

	componentWillUnmount() {
		this.props.notas.unSubscribe(this._referenceForRefreshView);
	}

	_updateView(notas) {
		let newState = { ...this.state, notas };
		this.setState(newState);
	}

	render() {
		return (
			<ul className='lista-notas'>
				{this.props.notas.notas.map((objeto, index) => {
					return (
						<li className='lista-notas_item' key={index}>
							<CardNota
								indice={index}
								textoNota={objeto.texto}
								tituloNota={objeto.titulo}
								categoria={objeto.categoria}
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
