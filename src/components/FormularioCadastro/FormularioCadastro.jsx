import React, { Component } from 'react';
import './estilo.css';
class FormularioCadastro extends Component {
	constructor(props) {
		super(props);
		this.titulo = '';
		this.texto = '';
		this.categoria = '';
	}

	handlerMudançaDeTitulo(evento) {
		evento.stopPropagation();
		this.titulo = evento.target.value;
	}

	handlerMudançaDeTexto(evento) {
		evento.stopPropagation();
		this.texto = evento.target.value;
	}

	handlerMudançaDeCategoria(evento) {
		evento.stopPropagation();
		this.categoria = evento.target.value;
	}

	criarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();
		this.props.criarNota(this.titulo, this.texto, this.categoria);
		document.querySelector('.form-cadastro').reset();
	}

	render() {
		return (
			<form className='form-cadastro ' onSubmit={this.criarNota.bind(this)}>
				<select
					required
					defaultValue=''
					className='form-cadastro_input form-cadastro_select'
					onChange={this.handlerMudançaDeCategoria.bind(this)}
				>
					<option value='' disabled hidden>
						Selecione uma categoria...
					</option>
					{this.props.categorias.map((categoria, index) => {
						return <option key={index}>{categoria}</option>;
					})}
				</select>
				<input
					type='text'
					placeholder='Título'
					className='form-cadastro_input'
					onBlur={this.handlerMudançaDeTitulo.bind(this)}
				/>
				<textarea
					rows={15}
					placeholder='Escreva sua nota...'
					className='form-cadastro_input'
					onBlur={this.handlerMudançaDeTexto.bind(this)}
				/>
				<button className='form-cadastro_input form-cadastro_submit'>
					Criar Nota
				</button>
			</form>
		);
	}
}

export default FormularioCadastro;
