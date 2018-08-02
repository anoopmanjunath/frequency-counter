function frequency(string){
	if(string == ' '){
		return 'empty';
	}
 var outPut={};
	string.split('').forEach(function(str){
		if(!outPut.hasOwnProperty(str)){
			outPut[str]= 1;
		}
		else {
			outPut[str] ++;
						 }
						 });
	return outPut;
}
console.log(frequency('abca'));
