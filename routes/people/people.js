module.exports = () => {
    const { State, District, Child } = require("../../models/people");
    const utils = require("../../utils")();

    return require("./people.factory")({
        State,
        District,
        Child,
        utils
    });
}