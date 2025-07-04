CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);


CREATE TABLE client (
	id SERIAL PRIMARY KEY,
	name TEXT,
	document VARCHAR(11) NOT NULL UNIQUE 
);

CREATE TABLE phones(
	id SERIAL PRIMARY KEY,
	number VARCHAR(11),
	client_id INTEGER REFERENCES client(id),
	description TEXT,
	carrier_id INTEGER REFERENCES carriers(id)	
);

CREATE TABLE recharges (
    id SERIAL PRIMARY KEY,
    phone_id INT NOT NULL,
    amount DECIMAL(10, 2) CHECK (amount BETWEEN 10.00 AND 1000.00) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (phone_id) REFERENCES phones(id) ON DELETE CASCADE
);


INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);


