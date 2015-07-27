var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
	var ran = false;

	this.addNode = function(node, value){
		var newNode = new Node(node, value);

		if (!ran){
			this.startingPoint = newNode;
			ran = true;
		}

		if(node in this.nodes) throw Error();
		else {
			this.nodes[node] = newNode;
			return newNode;
		}
	}

	this.getNode = function(title){
		return this.nodes[title];
	}

	this.connect = function(node1, node2){
		this.nodes[node1].connect();
	}

};

module.exports = Game;
