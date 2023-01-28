exports.RELATION_PATIENT = "patient"
exports.RELATION_HOSPITAL = "hospital"
exports.RELATION_PSYCHIATRIST = "psychiatrist";

exports.CONST_JWT_EXP_HOURS = "24h";
exports.CONST_JWT_ISSUERS = "rajeswar";
exports.CONST_JWT_ALGORITHM = "RS512";
exports.CONST_BCRYPT_SALT_ROUND = 12;
exports.CONST_REGEX_PHONE = /^\+[1-9]{1}[0-9]{3,14}$/;
exports.CONST_REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

exports.HTTP_CODE_CREATED = 201;
exports.HTTP_CODE_BAD_REQUEST = 400;
exports.HTTP_CODE_UNAUTHORIZED = 401;
exports.HTTP_CODE_FORBIDDEN = 403;
exports.HTTP_CODE_NOT_FOUND = 404;
exports.HTTP_CODE_DUPLICATE_RECORD = 409;
exports.HTTP_CODE_INTERNAL_ERROR = 500;