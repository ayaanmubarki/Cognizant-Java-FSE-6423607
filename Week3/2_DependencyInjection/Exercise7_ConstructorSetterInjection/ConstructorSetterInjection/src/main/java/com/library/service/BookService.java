package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private String appName;
    private BookRepository bookRepository;

    // Constructor injection
    public BookService(String appName) {
        this.appName = appName;
    }

    // Setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[" + appName + "] BookService: Adding book...");
        bookRepository.saveBook(title);
    }
}
