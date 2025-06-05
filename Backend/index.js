import cors from 'cors';
import express from 'express';
const app = express();



app.use(cors());
app.use(express.json());
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        return res.status(200).json({ message: 'Login successful' });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});

app.post('/api/logout', (req, res) => {
    return res.status(200).json({ message: 'Logout successful' });
});

app.listen(5000, () => {
    console.log('Backend running on http://localhost:5000');
});
