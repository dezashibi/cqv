let Question = require('../models/question');
let assert = require('assert');

class QuestionsController {

    index(req, res) {

        Question.find({}).sort({
            popularity: -1 
        }).exec((err, result) => {
            if (err) {
                res.status(401);
                res.send({ success: false, msg: err });
                return;
            }
            if (result) {
                res.status(200);
                res.send(result);
            } else {
                res.status(400);
                res.send({ success: false, msg: "No Data" });
            }
        });
    };

    store(req, res) {

        let item = req.body;

        let question = new Question({
            name: item.name || "An Attendee",
            description: item.description,
            popularity: 0,
            isAnswered: false
        });

        question.save((err, result) => {
            res.type('application/json');

            if (!err) {
                res.status(201);
                res.json(result);
            } else {
                res.status(400);
                res.json({ success: false, msg: "Question creation failed!!!" });
            }
        });
    };

    raise (req, res) {

        Question.findById(req.params.id, (err, foundQuestion) => {

            assert.equal(null, err);

            Question.findByIdAndUpdate(req.params.id,{ popularity : foundQuestion.popularity + 1 }, (err, question) => {

                assert.equal(null, err);

                if (question) {
                    res.status(200);
                    res.json({ success: true, msg: "Question raised"});
                } else {
                    res.status(401);
                    res.json({ success: false, msg: "Data not found"});
                }

            });

        });
    }

    answered (req, res) {

        Question.findByIdAndUpdate(req.params.id,{ isAnswered : true }, (err, question) => {
            assert.equal(null, err);

            if (question) {
                res.status(200);
                res.json({ success: true, msg: "Question answered"});
            } else {
                res.status(401);
                res.json({ success: false, msg: "Data not found"});
            }

        });
    }



    destroy(req, res) {

        Question.findByIdAndRemove(req.params.id, (err, question) => {

            if (err) {
                res.status(400);
                res.send({ success: false, msg: "Failed to delete" });
                return;
            }

            if (question) {
                res.status(200);
                res.json({ success: true, msg: "Data removed"});
            } else {
                res.status(401);
                res.json({ success: false, msg: "Data not found"});
            }
        });
    };

}

module.exports = QuestionsController;