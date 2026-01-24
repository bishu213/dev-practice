n=6
for i in range(1, n): #columns loop
    for j in range(n-i): #before spaces
        print(" ", end="")

    for k in range(2*i-1): #hollow triangle (rows)
        if k==0 or k==2*i-2  or i==n-1:
            print("*", end="")
        else:
            print(" ", end="")

    print()