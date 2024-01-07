window.products =
{
    getAll: function()
	{
		let list = document.querySelector('#product-list');
		this.loadData((data) =>
		{
			console.log(`Loaded [${data.length}] products`);
			for (var i=0; i<data.length; i++)
			{
				let item = document.createElement('div');
				item.className = `product col`;
				list.append(item);

				let card = document.createElement('div');
				card.className = `card h-100`;
				item.append(card);

				let img = document.createElement('img');
				img.src = `./images/stickers/${data[i].id}.png`;
				img.className = `card-img-top`;
				img.alt = `...`;
				card.append(img);

				let body = document.createElement('div');
				body.className = `card-body`;
				card.append(body);

				let title = document.createElement('h5');
				title.className = `card-title`;
				title.textContent = data[i].name;
				body.append(title);

				let link = document.createElement('a');
				link.className = `card-text stretched-link`;
				link.href = `details.html?id=${data[i].id}`;
				link.textContent = `₱${data[i].price}`;
				body.append(link);
			}
		})
	},
	getSelectedDetails: function() 
	{
		let url = new URL(window.location.href);
		let id = url.searchParams.get('id');
		
		console.log(`Loading product [${id}]`);

		this.loadData((data) =>
		{
			let product = data.find(item =>
			{
				return item.id == id;
			});

			document.title = `PEEL ME UP! | ${product.name}`;
			console.log(`Loaded product [${product.name}]`);
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
