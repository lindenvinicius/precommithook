#import os
#import sys   # unused import
def bad_function(x, y):    # bad spacing
    print("hello world")    # should use f-strings or format
    if x == y:   # missing spaces around operator
        return "bad"    # missing space
    else:
        return None
# trailing whitespace here