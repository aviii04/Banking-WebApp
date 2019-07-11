package com.example.demo.repo;
//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
	//List<User> findByEmail(String email);
}
