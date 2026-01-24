n=6
for i in range(n):
    l=1
    for j in range(n-i):
        print(" ", end="")
    
    for k in range(2*i-1):
        print(l, end="")
        l+=1
    print()