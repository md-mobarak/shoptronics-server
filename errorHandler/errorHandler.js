const errorHandler = (err, req, res, next) => {
  // Log the error
  console.error(err);

  // Send an error response to the client
  res.status(500).json({ message: "Internal server error", err });
};

module.exports = errorHandler;
