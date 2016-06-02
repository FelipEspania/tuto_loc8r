module.exports.homelist = function (req, res){
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader:{
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		locations:[{
			name: 'StartCups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: '3',
			facilities: ['Hot drinks, Food, Premium wifi'],
			distance: '100m'
		},{
			name: 'Rpro',
			address: 'Roman diaz, Providencia, 688',
			rating: '4',
			facilities: ['Coffee, Food, Free wifi'],
			distance: '200m'
		},{
			name: 'MeMe',
			address: 'Conferencia, Santiago, 1380',
			rating: '5',
			facilities: ['Food, Free wifi'],
			distance: '1000m'
		}]
	});
};

module.exports.locationInfo = function(req, res){
	res.render('location-info', { title: 'Location Info'});
};

module.exports.addReview = function(req, res){
	res.render('location-review-form', { title: 'Add Review'});
};