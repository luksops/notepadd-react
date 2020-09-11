import React, { Component } from 'react';
import { ReactComponent as IconDelete } from '../../assets/img/delete-icon.svg';
import './estilo.css';

class BotaoDeletar extends Component {
	render() {
		return (
			<IconDelete
				onClick={this.props.deletarNota}
				className='botao-deletar'
				alt='icone botão deletar'
			/>
		);
	}
}

export default BotaoDeletar;
