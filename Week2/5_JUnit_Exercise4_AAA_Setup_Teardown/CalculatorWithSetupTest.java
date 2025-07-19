package com.cognizant;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorWithSetupTest {

    private Calculator calculator;

    // Setup method – runs before each test
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator object created.");
    }

    // Teardown method – runs after each test
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator object cleared.");
    }

    @Test
    public void testAddition() {
        // Arrange done in @Before

        // Act
        int result = calculator.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = calculator.subtract(10, 5);

        // Assert
        assertEquals(5, result);
    }

    // Inner Calculator class (only for demo)
    static class Calculator {
        public int add(int a, int b) { return a + b; }
        public int subtract(int a, int b) { return a - b; }
    }
}
