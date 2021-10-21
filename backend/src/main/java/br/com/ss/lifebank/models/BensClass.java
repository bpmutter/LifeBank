package br.com.ss.lifebank.models;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "bens")
public  class BensClass {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToMany
	private List<Investimento> investiementos;
	@OneToMany
	private List<Veiculo> veiculos;
	@OneToMany
	private List<Imovel> imoveis;
	
	
	public BigDecimal valorDespesas() {
		BigDecimal valorDespesas = BigDecimal.ZERO;
		investiementos.forEach(c -> valorDespesas.add(c.valorDespesas()));
		veiculos.forEach(c -> valorDespesas.add(c.valorDespesas()));
		imoveis.forEach(c -> valorDespesas.add(c.valorDespesas()));
		return valorDespesas;
	}
	
	
	 public List<Despesa> getDespesas() {
		 List<Despesa> despesas = new ArrayList<>();
		 investiementos.forEach(c -> c.getDespesas().forEach(d -> despesas.add(d)));
		 veiculos.forEach(c -> c.getDespesas().forEach(d -> despesas.add(d)));
		 imoveis.forEach(c -> c.getDespesas().forEach(d -> despesas.add(d)));
		 return despesas;
	}
	 
	 public List<BensInterface> getBens(){
		 List<BensInterface> bens = new ArrayList<>();
		 investiementos.forEach(c -> bens.add(c));
		 veiculos.forEach(c -> bens.add(c));
		 imoveis.forEach(c -> bens.add(c));
		 return bens;
	 }

}
