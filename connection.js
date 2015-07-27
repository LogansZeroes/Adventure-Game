var Connection = function(nextNode, condition) {
	this.nextNode = nextNode;
	this.condition = condition;

	this.test = function(string){
		if ( string !== condition && condition !== undefined){
			return false;
		}
		else return true;
	};
};

module.exports = Connection;
