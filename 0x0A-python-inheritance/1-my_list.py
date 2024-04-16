#!/usr/bin/python3

'''Task 01 - 1. My list sorted list ascending'''


class MyList(list):
    '''class MyList'''
    def print_sorted(self):
        '''Function that prints the list,
        but the list  are sorted (ascending sort)'''
        print(sorted(self))
