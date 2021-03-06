/**
 * @fileoverview Tests for traverse.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var assert = require("chai").assert,
    path = require("path"),
    traverse = require("../../lib/util/traverse");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("traverse", function() {

    it("should ignore dot files and dirs", function() {
        traverse(
            { files: [ path.resolve(__dirname, "..", "fixtures", "traverse") ] },
            function(file) {
                assert.notEqual(file.indexOf("."), -1);
            }
        );
    });

    it("should ignore files by exclude option", function() {
        var files = [];

        traverse(
            {
                files: [ path.resolve(__dirname, "..", "fixtures", "traverse") ],
                exclude: function() {
                    return true;
                }
            },
            function(file) {
                files.push(file);
            }
        );

        assert.equal(files.length, 0);
    });

    it("should find normal files", function() {
        var files = [];

        traverse(
            { files: [ path.resolve(__dirname, "..", "fixtures", "traverse") ] },
            function(file) {
                files.push(file);
            }
        );

        assert.notEqual(files.length, 0);
    });

});
