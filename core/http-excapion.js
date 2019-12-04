class HttpExcapeion extends Error {
    constructor(code = 400, msg = "服务器异常") {
        super();
        this.code = code;
        this.msg = msg;
    }
}


class DeleteError extends HttpExcapeion {
    constructor(code, msg = "删除失败") {
        super();
        this.code = code || 403;
        this.msg = msg;
    }
}
class PutError extends HttpExcapeion {
    constructor(code, msg = "添加失败") {
        super();
        this.code = code || 403;
        this.msg = msg;
    }
}

class ServerError extends HttpExcapeion {
    constructor(code, msg = "服务器出错") {
        super();
        this.code = code || 500;
        this.msg = msg;
    }
}

class FindError extends HttpExcapeion {
    constructor(code, msg = "查询失败") {
        super();
        this.code = code || 500;
        this.msg = msg;
    }
}

module.exports = {
    HttpExcapeion,
    ServerError,
    PutError,
    FindError,
    DeleteError
}