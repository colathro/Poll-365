-- Starter Countries
INSERT INTO Country (Name, ISOCode) VALUES ('United States','USA')
INSERT INTO Country (Name, ISOCode) VALUES ('Canada','CAN')
INSERT INTO Country (Name, ISOCode) VALUES ('Brazil','BZL')
INSERT INTO Country (Name, ISOCode) VALUES ('Russia','RUS')

select * from Country

-- Starter Offices
INSERT INTO Office (Name, CountryId) VALUES ('Vision', 1)
INSERT INTO Office (Name, CountryId) VALUES ('Daniel', 3)
INSERT INTO Office (Name, CountryId) VALUES ('Putin', 4)
INSERT INTO Office (Name, CountryId) VALUES ('Hockey', 2)

select * from Office

INSERT INTO Question (Text) VALUES ('How much do you like TacoBell?')
INSERT INTO Question (Text) VALUES ('How much do you like Mcdonalds?')
INSERT INTO Question (Text) VALUES ('How much do you like Burger King?')
INSERT INTO Question (Text) VALUES ('How much do you like Wendys?')

select * from Question