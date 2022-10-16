function fibo(num){
      const fibo = [0,1];
    for(i=2; i <= num; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i]);	
	}
    return fibo
}

fibo(10);



	