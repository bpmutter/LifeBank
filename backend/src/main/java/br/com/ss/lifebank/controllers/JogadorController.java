package br.com.ss.lifebank.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.ss.lifebank.DTOs.JogadorDTO;
import br.com.ss.lifebank.models.Jogador;
import br.com.ss.lifebank.services.JogadorService;
import br.com.ss.lifebank.services.UsuarioService;


@RestController
@RequestMapping("jogador")
public class JogadorController{
	
	@Autowired
	private JogadorService service;
	
	@Autowired 
	private UsuarioService userService;
	
	
	@PostMapping("/add-profissao")
	public ResponseEntity<Jogador> addProfissao(@RequestBody JogadorDTO jogador){
		System.out.println(jogador.getProfissao());
		//jogador.inserirProfissao(service, userService);	
		return ResponseEntity.ok().build();
	}
	
	@GetMapping(value="/by-email")
	public ResponseEntity<JogadorDTO> buscar(@RequestBody JogadorDTO jogador){
		Jogador player = service.buscarUser(jogador.getEmail(), userService);
		jogador = player.parseToJogadorDTO();
		return ResponseEntity.ok(jogador);
	}
			

}
