function firstNonRepeatedChar(str) {
 // Write your code here
	const freq = {}
	let n = str.length
	for(let i=0;i<n;i++){
		let char = str.charAt(i)
		if(freq[char]){
			freq[char] = freq[char] + 1
		} else {
			freq[char] = 1
		}
	}
	for([key, value] of Object.entries(freq)) {
		if(value===1)
			return key
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
