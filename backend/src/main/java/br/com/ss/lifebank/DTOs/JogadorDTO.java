package br.com.ss.lifebank.DTOs;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import br.com.ss.lifebank.models.BensClass;
import br.com.ss.lifebank.models.Despesa;
import br.com.ss.lifebank.models.Jogador;
import br.com.ss.lifebank.models.Usuario;
import br.com.ss.lifebank.services.JogadorService;
import br.com.ss.lifebank.services.UsuarioService;

public class JogadorDTO {

	private String email;
	private String profissao;
	private BigDecimal saldo;
	private BigDecimal salario;
	private String nome;
	private Long id;
	private List<BensClass> bens = new ArrayList<>();
	private List<Despesa> despesas = new ArrayList<>();

	public JogadorDTO() {
	}
	
	
	
	public JogadorDTO(String email, String profissao, BigDecimal saldo, BigDecimal salario, String nome, Long id,
			List<BensClass> bens, List<Despesa> despesas) {
		this.email = email;
		this.profissao = profissao;
		this.saldo = saldo;
		this.salario = salario;
		this.nome = nome;
		this.id = id;
		this.bens = bens;
		this.despesas = despesas;
	}



	public JogadorDTO(String email, String profissao) {
		this.email = email;
		this.profissao = profissao;
	}

	public void inserirProfissao(JogadorService service, UsuarioService userService) {
		Optional<Usuario> usuario = userService.findByEmail(this.email);
		if (usuario.isPresent()) {
			Jogador jogador = new Jogador(this.profissao, usuario.get());
			service.addProfissao(jogador);
		}
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getProfissao() {
		return profissao;
	}

	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}

	public BigDecimal getSaldo() {
		return saldo;
	}

	public void setSaldo(BigDecimal saldo) {
		this.saldo = saldo;
	}

	public BigDecimal getSalario() {
		return salario;
	}

	public void setSalario(BigDecimal salario) {
		this.salario = salario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<BensClass> getBens() {
		return bens;
	}

	public void setBens(List<BensClass> bens) {
		this.bens = bens;
	}

	public List<Despesa> getDespesas() {
		return despesas;
	}

	public void setDespesas(List<Despesa> despesas) {
		this.despesas = despesas;
	}
}
