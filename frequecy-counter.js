function frequency(string){
	if(string == ' '){
		return 'empty';
	}
 var res={};
	string.split('').forEach(function(str){
		if(!res.hasOwnProperty(str)){
			res[str]= 1;
		}
		else {
			res[str] ++;
						 }
						 });
	return res;
}
console.log(frequency('abca'));
