window.products = {
    getAll: function () {

		let url = './products.json';
		let options = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};

		fetch(url, options)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	}
};


window.gallery = {
    init: function () {
    },
    next: function () {
    },
	prev: function () {
    }
};
