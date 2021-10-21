package br.com.ss.lifebank.models;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "investimentos")

public class Investimento implements BensInterface{

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private BigDecimal valorInvestido;
	private Double porcentualDeRendimento; // Por Rodada
	private BigDecimal valorFinal;
	@OneToOne	
	private Despesa imposto;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getValorInvestido() {
		return valorInvestido;
	}

	public void setValorInvestido(BigDecimal valorInvestido) {
		this.valorInvestido = valorInvestido;
	}

	public BigDecimal getValorFinal() {
		return valorFinal;
	}

	public void setValorFinal(BigDecimal valorFinal) {
		this.valorFinal = valorFinal;
	}

	public Double getPorcentualDeRendimento() {
		return porcentualDeRendimento;
	}

	
	public BigDecimal valorDespesas() {
		return this.imposto.getValor();
	}

	
	public List<Despesa> getDespesas() {
		return List.of(this.imposto);
	}
}
