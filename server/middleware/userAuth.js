import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.headers['authorization']?.split(" ")[1]; // Extract token from Authorization header
    console.log(token);
    
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Use your secret key
        req.user = decoded;  // Attach the decoded token payload (which includes user ID) to the req object
        next();
    } catch (error) {
        console.error('Invalid token:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default userAuth;
