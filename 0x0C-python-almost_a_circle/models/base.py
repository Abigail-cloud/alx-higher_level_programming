
class Base:
    """This class will be the “base” of all other classes in this project CIRCLE"""

    __nb_objects = 0

    """Initialize the base object with these args"""
    def __init__(self, id=None):
        if id is not none:
            self = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects
