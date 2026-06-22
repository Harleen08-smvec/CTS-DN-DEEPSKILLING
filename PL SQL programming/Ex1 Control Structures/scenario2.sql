DECLARE
    CURSOR vip_cursor IS
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000;
BEGIN
    FOR cust IN vip_cursor LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust.CustomerID;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status updated.');
END;
/