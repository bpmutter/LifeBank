package br.com.ss.lifebank.models;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.ss.lifebank.DTOs.JogadorDTO;

@Entity
@Table(name = "jogadores")
public class Jogador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private BigDecimal saldo = BigDecimal.ZERO;
	private BigDecimal salario = new BigDecimal("2000.00");
	@OneToMany(fetch = FetchType.EAGER)
	private List<BensClass> bens = new ArrayList<>();
	private int posicaoNoTabuleiro = 0;
	private String profissao;
	@OneToOne(cascade = CascadeType.ALL)
	private Usuario usuario;
	
	
	public Jogador() {
		
	}
	
	
	public JogadorDTO parseToJogadorDTO() {
		JogadorDTO jogadorDTO = new JogadorDTO(this.usuario.getUsername(), this.profissao, this.saldo, 
				this.salario, this.usuario.getNome(), this.id, this.bens, this.getDespesas());
		return jogadorDTO;		
	}


	public Jogador(String profissao, Usuario usuario) {
		this.profissao = profissao;
		this.usuario = usuario;
		usuario.addPerfil("player");
	}
	
	public Jogador(Usuario usuario) {
		this.usuario = usuario;
		usuario.addPerfil("player");
	}



	public BigDecimal valorDasDespesas() {
		BigDecimal valorDespesas = BigDecimal.ZERO; 
		this.getDespesas().forEach(c -> valorDespesas.add(c.getValor()));
		return valorDespesas;
	}
	
	public List<Despesa> getDespesas(){
		List<Despesa> despesas = new ArrayList<>();
		bens.forEach(c -> c.getDespesas().forEach(d -> despesas.add(d)));
		return despesas;
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
	
	@OneToMany
	public List<BensClass> getPropriedades() {
		return bens;
	}

	public void setPropriedades(List<BensClass> propriedades) {
		this.bens = propriedades;
	}

	public int getPosicaoNoTabuleiro() {
		return posicaoNoTabuleiro;
	}

	public void setPosicaoNoTabuleiro(int posicaoNoTabuleiro) {
		this.posicaoNoTabuleiro = posicaoNoTabuleiro;
	}

	public String getProfissao() {
		return profissao;
	}

	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}
	
	public Usuario getUsuario() {
		return usuario;
	}


	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
}
