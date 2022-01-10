package br.com.ss.lifebank.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "usuarios")
public class Usuario implements UserDetails {
	
	@Transient
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	@JsonIgnore
	private String senha;
	@Column(nullable = false, unique = true)
	private String email;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Perfil> perfis = new ArrayList<>();

	
	
	public Usuario() {
	}


	public Usuario(String nome, String senha, String email) {
		this.nome = nome;
		this.senha = senha;
		this.email = email;
	}


	public void addPerfil(String perfil) {
		perfis.add(new Perfil(perfil));
	}
	
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.perfis;
	}

	@Override
	public String getPassword() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
