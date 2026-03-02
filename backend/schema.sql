-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  calories INTEGER,
  protein VARCHAR(20),
  rating VARCHAR(20),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL(10,2) NOT NULL,
  shipping DECIMAL(10,2) DEFAULT 4.99,
  status VARCHAR(50) DEFAULT 'pending',
  name VARCHAR(100),
  email VARCHAR(100),
  address TEXT,
  city VARCHAR(100),
  zip VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

-- Insert sample products
INSERT INTO products (name, description, price, calories, protein, rating, image_url) VALUES
  ('Green Tea', 'A refreshing green tea flavored ice cream, high in antioxidants and protein. Perfect for a healthy treat!', 4.52, 280, '20g', '4.9 (437)', 'GreenTea.png'),
  ('Strawberry Chocolate', 'A delicious blend of sweet strawberries and rich chocolate. A classic combination with a healthy twist!', 4.85, 309, '20g', '4.9 (430)', 'Strawberry.png'),
  ('Choco-Loco', 'For the chocolate lovers! An intense chocolate flavor packed with protein to fuel your day.', 4.75, 320, '22g', '4.8 (389)', 'Chocolate.png'),
  ('Blue Mint Chip', 'A cool and refreshing blue mint ice cream with chocolate chips. Taste the chill with every bite!', 4.85, 290, '20g', '4.9 (412)', 'BlueMint.png'),
  ('Cookies and Cream', 'Classic cookies and cream flavor reimagined as a healthy protein ice cream. Crunchy, creamy and delicious!', 4.25, 310, '21g', '4.9 (450)', 'Cookiescream.png'),
  ('Peanut Butter Swirl', 'Rich peanut butter swirled into creamy ice cream. High in protein and absolutely irresistible!', 4.85, 330, '24g', '4.9 (438)', 'PeanutButter.png'),
  ('Cake Flavor', 'Tastes just like birthday cake! A fun and festive flavor that satisfies your sweet tooth while staying healthy.', 4.25, 300, '20g', '4.8 (375)', 'Cake.png')
ON CONFLICT DO NOTHING;
