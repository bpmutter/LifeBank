package br.com.ss.lifebank.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.ss.lifebank.models.Jogador;
import br.com.ss.lifebank.models.Usuario;

@Repository
public interface JogadorRepository extends JpaRepository<Jogador, Long> {
	
	@Query("SELECT j FROM Jogador j WHERE j.usuario = :user ")
	Optional<Jogador> findByUsuario(@Param("user")Usuario user);
	
	@Query("SELECT j FROM Jogador j WHERE j.usuario.email = :email ")
	Optional<Jogador> findByUsuarioEmail(@Param("email")String email);
	
	
	
}
