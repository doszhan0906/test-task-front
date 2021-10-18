let id = 0;
const recursion = (array) => {
	for(const i in array) {
		array[i].id = id;
		id++;
		if(array[i].children) {
			recursion(array[i].children)
		}
	}
}
export default recursion;