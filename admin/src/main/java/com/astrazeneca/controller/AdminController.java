package com.astrazeneca.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.astrazeneca.model.Policy;
import com.astrazeneca.service.AdminService;
import com.cloudant.client.api.model.Response;

@Controller
public class AdminController {

    @Autowired
    AdminService adminService;

    private static final String POLICY = "policy";
    private static final String INDEX_VIEW = "index";
    private static final String POLICIES = "policies";

    @GetMapping("/")
    public String newPolicy(Model model) {
        model.addAttribute(POLICIES, adminService.findPolicies());
        model.addAttribute(POLICY, new Policy());
        return INDEX_VIEW;
    }
    
    @GetMapping("/{policyId}")
    public String editPolicy(Model model, @PathVariable String policyId) {
        model.addAttribute(POLICIES, adminService.findPolicies());
        model.addAttribute(POLICY, adminService.findPolicy(policyId));
        
        return INDEX_VIEW;
    }
    
    @GetMapping("/delete/{policyId}")
    public String deletePolicy(Model model, @PathVariable String policyId) {
        adminService.deletePolicy(policyId);
        
        model.addAttribute(POLICIES, adminService.findPolicies());
        model.addAttribute(POLICY, new Policy());
        return INDEX_VIEW;
    }

    @PostMapping("/")
    public String savePolicy(Model model, @ModelAttribute Policy policy) {
        Response response;
        
        if(policy.getId().trim().length() > 0) {
            policy.set_id(policy.getId());
            policy.set_rev(policy.getRev());
        }
        
        response = adminService.savePolicy(policy);   
        policy.setId(response.getId());
        policy.setRev(response.getRev());
        adminService.sendNotification("New content available", "Document with id: " + response.getId() + "was updated", "All");
        
        model.addAttribute(POLICIES, adminService.findPolicies());
        return INDEX_VIEW;
    }    
}