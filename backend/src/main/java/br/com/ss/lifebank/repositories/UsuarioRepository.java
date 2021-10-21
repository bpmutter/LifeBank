package br.com.ss.lifebank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ss.lifebank.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
