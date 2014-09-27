var checkins = [],
	add = function (code) {
		checkins.push(code);
		return list();
	},
	list = function () {
		return checkins;
	};

module.exports = {
	add : add,
	list : list
}