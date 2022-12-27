package com.Loginpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.Loginpage.Repository.UserRepo;
import com.Loginpage.entity.User;

@Controller
public class UserController {
	
	
	/*@Autowired(required = true)
	private UserRepo repo;*/
	

	@GetMapping("/")
	public String login(Model model) {
		User user=new User();
		model.addAttribute("user",user);
		return "login";
	}
	
	@PostMapping("/userLogin")
	public String loginUser(@ModelAttribute("user")User user) {
		String userId=user.getUserId();
	    userdata=repo.findById(userId);
	   if(user.getPassword().equals(userdata.get().getPassword())) {
		return "home";
	   }
	   else
	   {
		   return "error";
	   }
	}
}
