module Main exposing (..)


c : Char
c =
    'a'


s : String
s =
    "Zeichenkette"


i : Int
i =
    42


f : Float
f =
    3.1415


b : Bool
b =
    True


n1 : number
n1 =
    42


n2 : number
n2 =
    3.1415



-- Record


somePoint =
    { x = 3, y = -1 }



-- Record mit dazugeschriebener Typdefinition


aPoint : { x : Int, y : Int }
aPoint =
    { x = 3, y = -1 }



-- Record Type für einfachere wiederholte Verwendung


type alias Point =
    { x : Int, y : Int }


anotherPoint : Point
anotherPoint =
    { x = 3, y = -1 }



-- beide Records erfüllen die Funktions-Signatur von someFunc, weil die Struktur jeweils passt


someFunc : Point -> Point -> Point
someFunc p1 p2 =
    { x = p1.x + p2.x, y = p1.y + p2.y }


x =
    someFunc somePoint anotherPoint
