package com.cognizant;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import org.junit.Test;

public class MyServiceTest2 {

    @Test
    public void testExternalApi() {
        // Mock
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        // Use in service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result);
    }

    @Test
    public void testVerifyInteraction() {
        // Mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Use
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Verify method was called
        verify(mockApi).getData();
    }
}
