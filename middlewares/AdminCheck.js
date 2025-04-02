function AdminCheck(req, res, next) {
    if (req.query.username !== "admin") {
      return res.send("GET OUT! You are not an Admin");
    }
    next(); // Call next() only if the user is admin
  }
  
  module.exports = AdminCheck;