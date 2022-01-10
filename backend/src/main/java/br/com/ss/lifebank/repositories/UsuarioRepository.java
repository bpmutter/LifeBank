package br.com.ss.lifebank.repositories;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.ss.lifebank.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
		
	
	@Cacheable("userByEmail")
	@Query("SELECT u FROM Usuario u WHERE u.email =:email")
	Optional<Usuario> findByEmail(@Param("email") String email);
	
	
	@Cacheable("userAuth")
	Optional<Usuario> findByEmailAndSenha(String email, String senha);
}
