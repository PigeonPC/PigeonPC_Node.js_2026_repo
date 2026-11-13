import bcrypt from 'bcrypt';

const saltRounds = 14;
const plaintextPassword = "hejhej12";
const hashedPassword = "$2b$14$6tPP4FAB8VTOj2GdaWCkKuAJzf4cBgq55AAKzAcZxlfEK5XFmIL6i";

// sign up
const hash = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hash);

// sign in / log in
const comparison = await bcrypt.compare(plaintextPassword, hashedPassword);

console.log(comparison);