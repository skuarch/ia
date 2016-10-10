package com.astrazeneca.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.astrazeneca.model.Notification;
import com.astrazeneca.model.Policy;
import com.cloudant.client.api.Database;
import com.cloudant.client.api.model.Response;
import com.cloudant.client.api.views.AllDocsResponse;

@Service
public class AdminService {

    @Autowired
    Database database;

    @Autowired
    RestTemplate restTemplate;

    @Value("${onesignal.appId}")
    private String appId;

    @Value("${onesignal.apiKey}")
    private String apiKey;

    @Value("${onesignal.endpoint}")
    private String endpoint;

    public List<String> findPolicies() {
        AllDocsResponse response;
        List<String> returnValue;
        try {
            response = database.getAllDocsRequestBuilder().build().getResponse();
            returnValue = response.getDocIds();
        } catch (IOException e) {
            returnValue = new ArrayList<>();
        }

        return returnValue;
    }

    public Policy findPolicy(String id) {
        Policy returnValue;

        returnValue = database.find(Policy.class, id);
        returnValue.setId(returnValue.get_id());
        returnValue.setRev(returnValue.get_rev());

        return returnValue;
    }

    public Response savePolicy(Policy policy) {
        Response returnValue;

        if ((policy.get_id() != null) && (policy.get_id().trim().length() > 0)) {
            returnValue = database.update(policy);
        } else {
            returnValue = database.save(policy);
        }

        return returnValue;
    }

    public void deletePolicy(String id) {
        Policy policy;

        policy = database.find(Policy.class, id);
        policy.set_deleted(true);
        database.update(policy);
    }

    public void sendNotification(String heading, String content, String... segments) {
        HttpHeaders headers;
        Notification notification;
        HttpEntity<Notification> entity;

        notification = new Notification(appId);
        notification.addHeading("en", heading);
        notification.addContent("en", content);
        for (String segment : segments) {
            notification.addSegment(segment);
        }

        headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Basic " + apiKey);

        entity = new HttpEntity<Notification>(notification, headers);
        restTemplate.postForObject(endpoint, entity, Object.class);
    }
}
