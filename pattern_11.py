n=6
for i in range(0, n):
    for j in range(n-i):
        print("  ", end="")

    for k in range(2*i-1):
        if k==0 or k==2*i-1  or i==n-1:
            print("* ", end="")
        else:
            print(" ", end="")

    print()