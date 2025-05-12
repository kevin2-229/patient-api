exports.verifyRole = (allowedRoles) => (req, res, next) => {
  const userRole = req.headers['x-user-role'];
  if (!allowedRoles.includes(userRole)) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
};
