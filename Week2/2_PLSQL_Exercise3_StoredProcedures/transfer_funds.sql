CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) IS
    from_balance NUMBER;
BEGIN
    SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_account;

    IF from_balance < amount THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient balance in source account.');
    ELSE
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_account;

        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_account;

        DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from Account ' || from_account || ' to Account ' || to_account);
    END IF;
END;
/

--transfer ₹1000 from 202 to 203
BEGIN
    TransferFunds(202, 203, 1000);
END;
/
