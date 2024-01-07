window.products =
{
    getAll: function()
	{
		this.loadData((data) =>
		{
			console.log('ALL DATA LOADED');
		})
	},
	getSelectedDetails: function() 
	{
		this.loadData((data) =>
		{
			console.log('SELECTED DETAILS LOADED');
		})
	},
	loadData: function(callback)
	{
		let dataUrl = './data/products.json';
		let options =
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};
		fetch(dataUrl, options)
			.then(response => response.json())
			.then(data =>
			{
				console.log(data);
				callback(data);
			})
			.catch(error => console.log(error));
	},
};


window.gallery = {
    init: function () {
    },
    next: function () {
    },
	prev: function () {
    }
};
