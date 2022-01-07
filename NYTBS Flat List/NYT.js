//Fetching real data from NYT
const API_KEY='73b191491b83909c7e07016f4bb4644f9:2:60667290';
const LIST_NAME='hardcover-nonfiction';
const API_STEM="https://api.nytimes.com/svc/books/v3/lists'
function fetchBooks(list_name=LIST_NAME)
	{
	let url='${API_STEM}/${LIST_NAME}?respone-format=json&api-key=${API_KEY}';
	return fetch(url)
		.then(response=>response.json())
		.then(responseJson=>{return responseJson.results.books;})
		.catch(error=>{console.error(error);});
	}	
export default {fetchBooks:fetchBooks};