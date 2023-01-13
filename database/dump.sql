CREATE TABLE IF NOT EXISTS collocations
(
  id          TEXT PRIMARY KEY DEFAULT uuid-generate-v4() NOT NULL,
  name        TEXT NOT NULL,
  secret_code TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
  id       TEXT PRIMARY KEY NOT NULL,
  name     TEXT NOT NULL,
  email    TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS collocation_roles
(
  collocation_id TEXT NOT NULL,
  user_id        TEXT NOT NULL,
  role           ENUM('member', 'admin') NOT NULL,
  PRIMARY KEY (collocation_id, user_id),
  FOREIGN KEY (collocation_id) REFERENCES collocations (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS expenses
(
  id             TEXT   PRIMARY KEY DEFAULT uuid-generate-v4() NOT NULL,
  date           DATE   NOT NULL,
  description    TEXT   NOT NULL,
  amount         REAL   NOT NULL,
  payers         TEXT[] NOT NULL,
  payers_amount  REAL   NOT NULL,
  user_id        TEXT   NOT NULL,
  collocation_id TEXT   NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (collocation_id) REFERENCES collocations (id)
);

CREATE TABLE IF NOT EXISTS payments
(
  id         TEXT PRIMARY KEY DEFAULT uuid-generate-v4() NOT NULL,
  date       DATE NOT NULL,
  amount     REAL NOT NULL,
  sender_id  TEXT NOT NULL,
  expense_id TEXT NOT NULL,
  FOREIGN KEY (expense_id) REFERENCES expenses (id),
  FOREIGN KEY (sender_id) REFERENCES users (id)
);
