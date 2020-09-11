import React, { Component } from 'react';
import iconDelete from '../../assets/img/delete-icon.svg';
import './estilo.css';

class BotaoDeletar extends Component {
	render() {
		return (
			<button onClick={this.props.deletarNota} className='botao-deletar'>
				<img
					className='botao-deletar_icone'
					alt='icone botão deletar'
					src={iconDelete}
				/>
			</button>
		);
	}
}

export default BotaoDeletar;
