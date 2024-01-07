window.products =
{
    getAll: function()
	{
		this.loadData((data) =>
		{
			console.log('Loaded [' + data.length + '] products');
			for (var i=0; i<data.length; i++)
			{
				
			}
		})
	},
	getSelectedDetails: function() 
	{
		let url = new URL(window.location.href);
		let id = url.searchParams.get('id');
		
		console.log('Loading product [' + id + ']');

		this.loadData((data) =>
		{
			let product = data.find(item =>
			{
				return item.id == id;
			});

			console.log('Loaded product [' + product.name + ']');
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
