#!/usr/bin/python2.7

def print_cycle_years(n):
    for i in range(n):
        cycle_year = i % 19
        print(i, cycle_year)

if __name__ == "__main__":
    print_cycle_years(100)