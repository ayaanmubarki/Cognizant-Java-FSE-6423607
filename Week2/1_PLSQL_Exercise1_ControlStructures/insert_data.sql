-- Insert sample data into Customers
INSERT INTO Customers VALUES (101, 'John Doe', 65, 12000, 'FALSE', 10.5);
INSERT INTO Customers VALUES (102, 'Alice Smith', 45, 8000, 'FALSE', 11.0);
INSERT INTO Customers VALUES (103, 'Rahul Kumar', 70, 15000, 'FALSE', 12.0);
INSERT INTO Customers VALUES (104, 'Fatima Noor', 62, 9500, 'FALSE', 11.5);
INSERT INTO Customers VALUES (105, 'Ravi Verma', 28, 18000, 'FALSE', 9.5);

-- Insert sample data into Loans
INSERT INTO Loans VALUES (201, 101, SYSDATE + 10);
INSERT INTO Loans VALUES (202, 102, SYSDATE + 40); -- Not due soon
INSERT INTO Loans VALUES (203, 103, SYSDATE + 25);
INSERT INTO Loans VALUES (204, 104, SYSDATE + 5);
INSERT INTO Loans VALUES (205, 105, SYSDATE + 60); -- Not due soon

COMMIT;
