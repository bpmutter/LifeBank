package br.com.ss.lifebank.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ss.lifebank.DTOs.UsuarioDTO;
import br.com.ss.lifebank.models.Usuario;
import br.com.ss.lifebank.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	
	
	public void cadastrarUsuario(Usuario user) {
		try {
		repository.save(user);
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}	
	}
	
	public Optional<Usuario> findByEmail(String email) {
		return repository.findByEmail(email);
	}
	
	public Optional<Usuario> findById(Long id){
		return repository.findById(id);
	}

	public boolean autenticaUsuario(UsuarioDTO usuario) {
		Optional<Usuario> user =  repository.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
		if(user.isPresent())
			return true;
		else return false;
		
	}
	
	
}
