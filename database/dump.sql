CREATE TABLE IF NOT EXIST collocations (
  id UUID PRIMARY KEY DEFAULT uuid-generate-v4(),
  name TEXT NOT NULL,
);

CREATE TABLE IF NOT EXIST users (
  id UUID PRIMARY KEY DEFAULT uuid-generate-v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
);

CREATE TABLE IF NOT EXIST collocation_roles (
  collocation_id UUID NOT NULL,
  user_id UUID NOT NULL,
  role ENUM('member', 'admin') NOT NULL DEFAULT 'member',
  PRIMARY KEY (collocation_id, user_id),
  FOREIGN KEY (collocation_id) REFERENCES collocations (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXIST expenses (
  id UUID PRIMARY KEY DEFAULT uuid-generate-v4(),
  date DATE NOT NULL,
  amount REAL NOT NULL,
--   pas obligatoire
  refund_percentage REAL NOT NULL DEFAULT 0, 
  refund_amount REAL NOT NULL DEFAULT 0,
  
  number_sender INTEGER NOT NULL,
  user_id UUID NOT NULL,
  collocation_id UUID NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (collocation_id) REFERENCES collocations (id)
);

CREATE TABLE IF NOT EXIST payments (
  id UUID PRIMARY KEY DEFAULT uuid-generate-v4(),
  date DATE NOT NULL,
  amount REAL NOT NULL,
  sender_id UUID NOT NULL,
  expense_id UUID NOT NULL,
  FOREIGN KEY (expense_id) REFERENCES expenses (id),
  FOREIGN KEY (sender_id) REFERENCES users (id)
);
