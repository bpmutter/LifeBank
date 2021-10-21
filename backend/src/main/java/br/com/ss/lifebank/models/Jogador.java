package br.com.ss.lifebank.models;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "jogadores")
public class Jogador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private BigDecimal saldo =BigDecimal.ZERO;
	private BigDecimal salario;
	@OneToMany
	private List<BensClass> bens = new ArrayList<>();
	private int posicaoNoTabuleiro = 0;
	private String profissao;
	@OneToOne
	private Usuario usuario;
	
	
	public Jogador() {
		
	}
	


	public Jogador(BigDecimal salario, String profissao, Usuario usuario) {
		this.salario = salario;
		this.profissao = profissao;
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
}
