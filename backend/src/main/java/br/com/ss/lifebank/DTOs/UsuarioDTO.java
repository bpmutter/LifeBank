package br.com.ss.lifebank.DTOs;

import br.com.ss.lifebank.models.Usuario;
import br.com.ss.lifebank.services.JogadorService;

public class UsuarioDTO {
	
	
	private String nome;
	private String senha;
	private String email;
	
	
	public UsuarioDTO() {}
	
	
	public UsuarioDTO(String email, String nome, String senha) 
	{
		this.email = email;
		this.nome = nome;
		this.senha = senha;

	}


	public boolean cadastrar(JogadorService service) {
		Usuario usuario = new Usuario(this.nome,  this.senha,  this.email);
		return service.cadastrarJogador(usuario);
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	

}
