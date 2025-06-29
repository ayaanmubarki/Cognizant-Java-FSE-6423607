package com.cognizant;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    public int add(int a, int b) {
        return a + b;
    }

    @Test
    public void testAdd() {
        CalculatorTest calc = new CalculatorTest();
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }
}
