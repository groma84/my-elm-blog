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



-- Listen


liste : List Int
liste =
    [ 1, 2, 3, 5, 7, 11 ]


quadriere : Int -> Int
quadriere a =
    a ^ a


quadrierteListe : List Int
quadrierteListe =
    List.map quadriere liste


type Hintergrundfarbe
    = Rot
    | Gelb
    | Blau


farbeZuHex : Hintergrundfarbe -> String
farbeZuHex hintergrundfarbe =
    case hintergrundfarbe of
        Rot ->
            "#ff0000"

        Gelb ->
            "#ffff00"

        Blau ->
            "#0000ff"


type Gewicht
    = Gewicht Float


type Groesse
    = Groesse Float


type alias Bmi =
    Float


errechneBmi : Gewicht -> Groesse -> Bmi
errechneBmi (Gewicht gewicht) (Groesse groesse) =
    gewicht / (groesse * groesse)


type alias Radius =
    Float


type alias Laenge =
    Float


type alias Breite =
    Float


type Form
    = Kreis Radius
    | Rechteck Laenge Breite


flaeche : Form -> Float
flaeche form =
    case form of
        Kreis radius ->
            pi * (radius ^ 2)

        Rechteck laenge breite ->
            laenge * breite
