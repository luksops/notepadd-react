import React, { Component } from 'react';
import './estilo.css';
import BotaoDeletar from '../BotaoDeletar';

class CardNota extends Component {
	render() {
		return (
			<section className='card-nota'>
				<section className='card-nota_botao-cabecalho'>
					<BotaoDeletar deletarNota={this.props.deletarNota} />
					<header className='card-nota_cabecalho'>
						<h3 className='card-nota_titulo'>{this.props.tituloNota}</h3>
					</header>
				</section>

				<p className='card-nota_texto'>{this.props.textoNota}</p>
			</section>
		);
	}
}

export default CardNota;
