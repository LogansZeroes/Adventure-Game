var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
	this.conditions = [];

	this.connect = function(node, condition){

		var nodeObj = new Connection(node, condition);

		this.connections.forEach(function(nodeObj){
			if (nodeObj.condition === condition){
				throw Error();
			}
		})

		this.connections.push(nodeObj);
		this.conditions.push(nodeObj.condition)
	}

	this.route = function(condition){

		for (var i = 0; i < this.connections.length; i++){
			if(this.connections[i].condition === condition){
				 return this.connections[i].nextNode;
			}
		}
	}

	this.getConnectionStrings = function(){
		return this.conditions;
	}

	this.hasConnectionCondition = function(condition){
		for (var i = 0; i < this.connections.length; i++){
			if(this.connections[i].condition === condition){
				 return true;
			}
		}
		return false;
	}
	
};

module.exports = Node;
