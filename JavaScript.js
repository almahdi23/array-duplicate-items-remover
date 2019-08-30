var ar = ["mango", "apple", "mango", "mango", "apple", "apple", "banana", "apple", "mango"]

console.log(removeduplicates(ar));

function removeduplicates(a) {
	var na = []
	for (i in a) {
		if (i == 0) {
			na.push(a[0])
		} else {
			var con = "no"
			for (k in na) {
				if (na[k] == a[i]) {
					con = "no"
					break
				} else {
					con = "yes"
				}
			}
			if (con == "yes") {
				na.push(a[i])
			}
		}
	}
	return na
};
