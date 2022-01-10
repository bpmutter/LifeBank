package br.com.ss.lifebank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.ss.lifebank.models.BensClass;

@Repository
public interface BensRepository extends JpaRepository<BensClass, Long> {

}
