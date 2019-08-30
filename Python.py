ar = ["mango", "apple", "mango", "mango", "apple", "apple", "banana", "apple", "mango"]

def removeduplicates(a):
	na = []
	i = 0
	while i < len(a) :
		if i == 0 :
			na.append(a[0])
		else:
			global con
			con = "no"
			l = 0
			while l < len(na) :
				if na[l] == a[i]:
					con = "no"
					break
				else:
					con = "yes"
				l+=1
			if con == "yes":
				na.append(a[i])
		i+=1
	return na

print(removeduplicates(ar))
