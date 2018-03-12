let concatParams = (params)=>{
	if(!params){
		return
	}
	let esc = encodeURIComponent;
	let query = Object.keys(params)
	.map(k => esc(k) + '=' + esc(params[k]))
	.join('&')
	return query
}
export default function Fetch(url, data={method: 'get'}){
	let params = []
	if(data.method.toLowerCase() === 'get'){
		let queryUrl = url;
		if(data.params){
			queryUrl = queryUrl + '?' + concatParams(data.params)
		}
		params.push(queryUrl)
	}else if(data.method.toLowerCase() === 'post'){
		if(data.headers['Content-Type'].toLowerCase() === 'application/json'){
			data.body = JSON.stringify(data.params)
			params.push(url, data)
		}else{
			let formData = new FormData()
			for(let key in data.body){
				formData.append(key, data.body[key])
			}
			data.body = formData
			params.push(url, data)
		}
	}
	return fetch.apply(null, params).then((data)=>{
		return data.json();
	});
}