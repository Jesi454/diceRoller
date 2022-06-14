def rollAnim():
    list2: List[Image] = []
    list2[randint(0, 6)].show_image(0)
def createImages():
    global _1Side, _2Side, _3Side, _4Side, _5Side, _6Side, sides
    _1Side = images.create_image("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    _2Side = images.create_image("""
        . . . . .
                . . . . .
                . # . # .
                . . . . .
                . . . . .
    """)
    _3Side = images.create_image("""
        # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
    """)
    _4Side = images.create_image("""
        . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
    """)
    _5Side = images.create_image("""
        # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
    """)
    _6Side = images.create_image("""
        . # . # .
                . . . . .
                . # . # .
                . . . . .
                . # . # .
    """)
    sides = [_1Side, _2Side, _3Side, _4Side, _5Side, _6Side]
sides: List[Image] = []
_6Side: Image = None
_5Side: Image = None
_4Side: Image = None
_3Side: Image = None
_2Side: Image = None
_1Side: Image = None
createImages()

def on_forever():
    rollAnim()
basic.forever(on_forever)
