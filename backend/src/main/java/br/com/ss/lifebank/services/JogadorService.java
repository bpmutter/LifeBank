package br.com.ss.lifebank.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ss.lifebank.models.Jogador;
import br.com.ss.lifebank.models.Usuario;
import br.com.ss.lifebank.repositories.JogadorRepository;

@Service
public class JogadorService {

	@Autowired
	private JogadorRepository repository;
	
	
	
	public void addProfissao(Jogador player) {		
			repository.save(player);
		}
		
	public Jogador buscarUser(String email, UsuarioService userService) {
		Optional<Usuario> usuario = userService.findByEmail(email);
		Optional<Jogador> player = repository.findByUsuario(usuario.get());
		return player.get();
	}
	
	public Jogador findByUsuarioEmail(String email) {
		Optional<Jogador> jogador = repository.findByUsuarioEmail(email);
		return jogador.get();
		
	}
	
	public boolean cadastrarJogador(Usuario usuario) {
		Jogador jogador = new Jogador(usuario);
		try {
			repository.save(jogador);
			return true;
		}catch (Exception e) {
			return false;
		}
		
	}
		
	}
	
	

