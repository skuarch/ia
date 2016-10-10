package com.astrazeneca.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Notification {
    private String app_id;
    private List<String> included_segments;
    private Map<String, String> headings;
    private Map<String, String> contents;
    
    public Notification(String app_id) {
        this.app_id = app_id;
    }
    
    public void addSegment(String segment) {
        if(this.included_segments == null) {
            this.included_segments = new ArrayList<>();
        }
        
        this.included_segments.add(segment);
    }
    
    public void addHeading(String language, String heading) {
        if(this.headings == null) {
            this.headings = new HashMap<>();
        }
        
        this.headings.put(language, heading);
    }
    
    public void addContent(String language, String content) {
        if(this.contents == null) {
            this.contents = new HashMap<>();
        }
        
        this.contents.put(language, content);
    }

    public String getApp_id() {
        return app_id;
    }

    public void setApp_id(String app_id) {
        this.app_id = app_id;
    }

    public List<String> getIncluded_segments() {
        return included_segments;
    }

    public void setIncluded_segments(List<String> included_segments) {
        this.included_segments = included_segments;
    }

    public Map<String, String> getHeadings() {
        return headings;
    }

    public void setHeadings(Map<String, String> headings) {
        this.headings = headings;
    }

    public Map<String, String> getContents() {
        return contents;
    }

    public void setContents(Map<String, String> contents) {
        this.contents = contents;
    }
}
