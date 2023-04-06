const Blog = require("../models/Blog.js");
const asyncWrapper = require("../middleware/async.js")
const Response = require("../common/Response.js")
const Constants = require("../common/Constants.js")


class Blogs {
    static create = asyncWrapper(async (req, res) => {
        const post = new Blog({
            Title: req.body.Title,
            Content: req.body.Content,
            imagePath: req.file.filename
        });
        try {
            await post.save();
            let data = Response(Constants.RESULT_CODE.OK, Constants.RESULT_FLAG.SUCCESS, '', post);
            return res.send(data);
        } catch (err) {
            let data = Response(Constants.RESULT_CODE.ERROR, Constants.RESULT_FLAG.FAIL, err);
            return res.send(data);
        }
    })

    static getAll = asyncWrapper(async (req, res) => {
        Blog.aggregate([
            {
                $project: {
                    Title: "$Title",
                    imagePath: "$imagePath",
                },
            },
        ]).then((result) => {
            let data = Response(Constants.RESULT_CODE.OK, Constants.RESULT_FLAG.SUCCESS, '', result);
            return res.send(data);
        }
        ).catch((err) => {
            let data = Response(Constants.RESULT_CODE.ERROR, Constants.RESULT_FLAG.FAIL, err);
            return res.send(data);
        }
        );
    })

    static getOne = asyncWrapper(async (req, res) => {
        const post = await Blog.findById(req.params.Id);
        let data = Response(Constants.RESULT_CODE.OK, Constants.RESULT_FLAG.SUCCESS, '', post);
        return res.send(data);
    })

}

module.exports = Blogs

