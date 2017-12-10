#!/usr/bin/python2.7

def print_cycle_years(n):
    for i in range(n):
        cycle_year = i % 19
        print(i, cycle_year)

if __name__ == "__main__":
    print_cycle_years(100)


def print_cycle_years(n):
    for i in range(n):
        cycle_year = i % 19 + 1
        leap_year = False
        if cycle_year == 3: # or 5, 8,....
            leap_year = True
        print(i+1, cycle_year, 'leap_year' if leap_year else '')

if __name__ == "__main__":
    print_cycle_years(100)
