print("*")

print("\n")
##############################

for i in range(1, 5):
    print("* ", end=" ")


print("\n")
###############################

for i in range(5):
    for j in range(5):
        print("* ", end=" ")
    print()

print("\n")
###############################

for i in range(5):
    for j in range(5):
        if i==0 or i==4 or j==0 or j==4:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

print("\n")
###############################

for i in range(5):
    for j in range(i):
        print("* ", end=" ")
    print()

print("\n")
##############################

for k in range(5):
    t=0
    for l in range(5):
        if t<k:
            print(" ", end=" ")
        else:
            print("*", end=" ")
        t+=1
    print()
    





print("\n")
##############################







print("\n")
##############################





print("\n")
##############################