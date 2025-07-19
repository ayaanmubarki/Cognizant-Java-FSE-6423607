CREATE TABLE ACCOUNT (
    account_number BIGINT PRIMARY KEY,
    account_holder_name VARCHAR(255),
    account_type VARCHAR(50),
    balance DOUBLE
);
INSERT INTO ACCOUNT (account_number, account_holder_name, account_type, balance) VALUES
(1001, 'Ayaan Ahmed', 'Savings', 45000.0),
(1002, 'Fatima Rahim', 'Current', 120000.0);
