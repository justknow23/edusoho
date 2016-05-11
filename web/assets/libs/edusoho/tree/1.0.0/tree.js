define(function(require, exports, module) {

    require('z_tree');
    require('z_tree_css');
    var Widget = require('widget');

    var Tree = Widget.extend({

    	attrs: {
        },

    	setup: function() {
    		var self = this;
    		var element = self.element;

	        var defaultSetting = {
	            check: {
	                enable: true
	            },
	            data: {
	                simpleData: {
	                    enable: true
	                }
	            }
	        };

	        var setting = $.extend(self.get(), defaultSetting);

	        var zNodes = element.data('nodes')
	        $.fn.zTree.init($(element), setting, zNodes);
	    },

	    getCheckedNodes: function() {
	    	var self = this;
    		var element = self.element;
            var tree = $.fn.zTree.getZTreeObj($(element).attr("id"));
            var nodes = tree.getCheckedNodes(true);
            return nodes;
        }
    });

    module.exports = Tree;
});