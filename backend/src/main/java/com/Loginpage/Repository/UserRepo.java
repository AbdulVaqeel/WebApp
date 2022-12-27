package com.Loginpage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Loginpage.entity.User;


@Repository
public interface UserRepo extends JpaRepository<User,String>{

  User  findbyUserId(String userId);
}
