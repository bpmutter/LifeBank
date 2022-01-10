package br.com.ss.lifebank.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ss.lifebank.DTOs.ErrorsDTO;
import br.com.ss.lifebank.DTOs.JogadorDTO;
import br.com.ss.lifebank.DTOs.UsuarioDTO;
import br.com.ss.lifebank.models.Jogador;
import br.com.ss.lifebank.services.JogadorService;
import br.com.ss.lifebank.services.UsuarioService;

@RestController
@RequestMapping("/user")
public class UserController {

	
	@Autowired
	private UsuarioService service;
	
	@Autowired
	private JogadorService jogadorService;
	
	
	@PostMapping("/new")
	public ResponseEntity<?> cadastroUser(@RequestBody UsuarioDTO novoUsuario){
		if(novoUsuario.cadastrar(jogadorService)) {
			return  ResponseEntity.ok().build();
		}
		ErrorsDTO erros = new ErrorsDTO(true, "Este email já esta em uso!");
		return  ResponseEntity.ok(erros);
	}
	
	@Transactional
	@PostMapping("/auth")
	public ResponseEntity<JogadorDTO> autenticar(@RequestBody UsuarioDTO usuario){
		if(service.autenticaUsuario(usuario)) { 
			Jogador jogador = jogadorService.findByUsuarioEmail(usuario.getEmail());
			JogadorDTO player = jogador.parseToJogadorDTO();
			return ResponseEntity.ok(player);
		}
		else return ResponseEntity.notFound().build(); 
	}
	
	@GetMapping()
	public ResponseEntity<JogadorDTO> test(){
		
		return ResponseEntity.ok().build();
	}

}
