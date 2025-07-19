BEGIN
    FOR cust IN (
        SELECT CustomerID, Age, LoanInterestRate
        FROM Customers
        WHERE Age > 60
    ) LOOP
        UPDATE Customers
        SET LoanInterestRate = LoanInterestRate - 1
        WHERE CustomerID = cust.CustomerID;

        DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ID: ' || cust.CustomerID);
    END LOOP;
END;
/