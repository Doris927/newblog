package com.tammy.newblog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Set;

@Controller
public class BlogController {

    private final Set<String> sample;

    @Autowired
    public BlogController(final Set<String> sample) {
        this.sample = sample;
    }

    @RequestMapping("/*")
    public String helloTest(){
        return "index";
    }


}
