package br.com.ss.lifebank.models;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "veiculos")

public class Veiculo implements BensInterface{

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private BigDecimal valorCompra;
	private BigDecimal valorVenda;
	@OneToMany(fetch = FetchType.LAZY)
	private List<Despesa> despesas;
	
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getValorCompra() {
		return valorCompra;
	}

	public void setValorCompra(BigDecimal valorCompra) {
		this.valorCompra = valorCompra;
	}

	public BigDecimal getValorVenda() {
		return valorVenda;
	}

	public void setValorVenda(BigDecimal valorVenda) {
		this.valorVenda = valorVenda;
	}

	public List<Despesa> getDespesas() {
		return despesas;
	}

	public void setGastos(List<Despesa> gastos) {
		this.despesas = gastos;
	}


	public BigDecimal valorDespesas() {
		BigDecimal valorDespesas = BigDecimal.ZERO; 
		this.despesas.forEach(d -> valorDespesas.add(d.getValor()));
		return valorDespesas;
	}


	
	
	
	
}
