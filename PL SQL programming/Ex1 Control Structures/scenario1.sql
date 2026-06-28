DECLARE
    CURSOR cust_cursor IS
        SELECT CustomerID
        FROM Customers
        WHERE Age > 60;
BEGIN
    FOR cust IN cust_cursor LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust.CustomerID;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Interest rates updated successfully.');
END;
/