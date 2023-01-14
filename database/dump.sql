CREATE TABLE IF NOT EXISTS collocations
(
  id          INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name        TEXT NOT NULL,
  secret_code TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
  id       INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name     TEXT NOT NULL,
  email    TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS collocation_roles
(
  collocation_id INT  NOT NULL,
  user_id        INT  NOT NULL,
  role           ENUM('member', 'admin') NOT NULL,
  PRIMARY KEY (collocation_id, user_id),
  FOREIGN KEY (collocation_id) REFERENCES collocations (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS expenses
(
  id             INT    PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date           DATE   NOT NULL,
  title          TEXT   NOT NULL,
  amount         REAL   NOT NULL,
  payers         TEXT   NOT NULL,
  payers_amount  REAL   NOT NULL,
  user_id        INT    NOT NULL,
  collocation_id INT    NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (collocation_id) REFERENCES collocations (id)
);

CREATE TABLE IF NOT EXISTS payments
(
  id         INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date       DATE NOT NULL,
  amount     REAL NOT NULL,
  sender_id  INT  NOT NULL,
  expense_id INT  NOT NULL,
  FOREIGN KEY (expense_id) REFERENCES expenses (id),
  FOREIGN KEY (sender_id) REFERENCES users (id)
);
