package com.tammy.newblog;
import org.eclipse.jetty.server.Dispatcher;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.AbstractHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.webapp.WebAppContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.concurrent.CountDownLatch;

public class HelloWorld{
    final static CountDownLatch countDownLatch = new CountDownLatch(1);
    public static final void main(final String[] args) throws Exception {
        System.out.println("hello world");



        Runtime.getRuntime().addShutdownHook(new Thread(() -> shutdown()));

        final Runnable runnable = new Runnable() {
            @Override
            public void run() {
                try{
                    System.out.println("main thread is starting");
                    countDownLatch.await();
                } catch (final InterruptedException e){
                    Thread.currentThread().interrupt();
                }
                System.out.println("shutdown+1");
                //shutdown();
            }
        };
        final Thread mainThread = new Thread(runnable, "main");
        mainThread.start();

        Server server=new Server(9000);
        final WebAppContext webAppContext = new WebAppContext();
        final AnnotationConfigWebApplicationContext annotationConfigWebApplicationContext = new AnnotationConfigWebApplicationContext();
        annotationConfigWebApplicationContext.register(Configure.class);
        final DispatcherServlet dispatcherServlet = new DispatcherServlet(annotationConfigWebApplicationContext);
        webAppContext.addServlet(new ServletHolder(dispatcherServlet),"/*");
        webAppContext.setContextPath("/");
        webAppContext.setResourceBase(".");
        server.setHandler(webAppContext);
        server.start();
        server.join();
    }

    private static void shutdown(){
        System.out.println("shutdown");
        countDownLatch.countDown();
    }


}


