package br.com.ss.lifebank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class LifebankApplication {

	public static void main(String[] args) {
		SpringApplication.run(LifebankApplication.class, args);
	}

}
