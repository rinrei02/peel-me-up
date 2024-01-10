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
				img.src = `./products/${data[i].id}/main.png`;
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

			let selectedGalleryIndex = 0;
			let galleryImage = document.querySelector('#gallery-image');
			galleryImage.style.backgroundImage = `url('./products/${product.id}/${product.gallery[selectedGalleryIndex]}')`;

			document.querySelector('#gallery-image button.prev').onclick = function()
			{
				selectedGalleryIndex = (selectedGalleryIndex === 0)
					? product.gallery.length - 1
					: selectedGalleryIndex - 1;
				galleryImage.style.backgroundImage = `url('./products/${product.id}/${product.gallery[selectedGalleryIndex]}')`;
			};
			document.querySelector('#gallery-image button.next').onclick = function()
			{
				selectedGalleryIndex = (selectedGalleryIndex + 1) % product.gallery.length;
				galleryImage.style.backgroundImage = `url('./products/${product.id}/${product.gallery[selectedGalleryIndex]}')`;
			};

			let galleryList = document.querySelector('#gallery-list');
			for (var i=0; i<product.gallery.length; i++)
			{
				let imgSrc = `./products/${product.id}/${product.gallery[i]}`;
				console.log(`Loaded product gallery image [${imgSrc}]`);

				let item = document.createElement('li');
				galleryList.append(item);

				let link = document.createElement('a');
				link.href = imgSrc;
				link.style.backgroundImage = `url('${imgSrc}')`;
				link.onclick = function()
				{
					galleryImage.style.backgroundImage = `url('${this.href}')`;
					return false;
				};
				item.append(link);

				let img = document.createElement('img');
				img.src = imgSrc;
				img.alt = `...`;
				link.append(img);
			}
		})
	},

	loadData: function(callback)
	{
		let dataUrl = './products/list.json';
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
