/**
 * Foo2Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  sayHello: function(req, res) {
    return res.json({ hello: "world" });
  }
};

