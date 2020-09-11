import React, { Component } from 'react';
import './estilo.css';
import BotaoDeletar from '../BotaoDeletar';

class CardNota extends Component {
	deletar() {
		this.props.deletarNota(this.props.indice);
	}

	render() {
		return (
			<section className='card-nota'>
				<header className='card-nota_cabecalho'>
					<h3 className='card-nota_titulo'>{this.props.tituloNota}</h3>
					<BotaoDeletar
						deletarNota={this.deletar.bind(this)}
						className='card-nota_botao-deletar'
					/>
				</header>

				<p className='card-nota_texto'>{this.props.textoNota}</p>
			</section>
		);
	}
}

export default CardNota;
