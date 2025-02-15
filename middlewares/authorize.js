const authorize = (...requiredRoles) => (req, res, next) => {
  console.log('Authorize middleware invoked with requiredRoles:', requiredRoles);
  try {
    console.log('Checking user and roles with req.user:', req.user);
    if (!req.user || req.user.role !== 'admin') {
      console.log('Access denied for user:', req.user);
      return res.status(403).json({ message: 'Access denied. Only admins can delete users.' });
    }
    console.log('Access granted for user:', req.user);
    next();
  } catch (error) {
    console.log('Error occurred:', error.message);
    res.status(500).json({ message: error.message });
  }
};

console.log('Exporting authorize module');
module.exports = authorize;

