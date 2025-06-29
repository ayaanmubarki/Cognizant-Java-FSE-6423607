SET SERVEROUTPUT ON;

BEGIN
    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
        WHERE Balance > 10000
    ) LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust.CustomerID;

        DBMS_OUTPUT.PUT_LINE('VIP Status granted to Customer ID: ' || cust.CustomerID);
    END LOOP;
END;
/
