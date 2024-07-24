getFullResponseFromAPI(success){
	return new Promise((resolve, reject)=>{
		if (success){
			resolve({status:200, body:'Success'})
		}esle{
			reject(throw new Error("The fake API is not working currently"))
		}
	})
}
