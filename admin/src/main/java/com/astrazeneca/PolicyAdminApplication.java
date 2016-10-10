package com.astrazeneca;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.cloudant.client.api.ClientBuilder;
import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;

@SpringBootApplication
public class PolicyAdminApplication {
    
    @Value("${cloudant.account}")
    private String dbAccount;
    
    @Value("${cloudant.username}")
    private String dbUsername;
    
    @Value("${cloudant.password}")
    private String dbPassword;

	public static void main(String[] args) {
		SpringApplication.run(PolicyAdminApplication.class, args);
	}
	
	@Bean
	public Database couchDB() {
	    CloudantClient cloudantClient;
	    
	    cloudantClient = ClientBuilder.account(dbAccount).username(dbUsername).password(dbPassword).build();
	    return cloudantClient.database("policy", false);
	}
	
	@Bean
	public RestTemplate restTemplate() {
	    return new RestTemplate();
	}
}
