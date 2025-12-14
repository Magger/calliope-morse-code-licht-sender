function Buchstabenabstand () {
    basic.pause(6 * dit)
}
function Dah () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(dah)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function Dit () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(dit)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function Wortabstand () {
    basic.pause(14 * dit)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(Dauermodus)) {
        MorceCode(Text)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Dauermodus) {
        Dauermodus = 0
    } else {
        Dauermodus = 1
    }
})
function CodeTabelle (Zeichen: string) {
    Code = ""
    if (Zeichen == "A") {
        Code = ".-"
    }
    if (Zeichen == "B") {
        Code = "-..."
    }
    if (Zeichen == "C") {
        Code = "-.-."
    }
    if (Zeichen == "D") {
        Code = "-.."
    }
    if (Zeichen == "E") {
        Code = "."
    }
    if (Zeichen == "F") {
        Code = "..-."
    }
    if (Zeichen == "G") {
        Code = "--."
    }
    if (Zeichen == "H") {
        Code = "...."
    }
    if (Zeichen == "I") {
        Code = ".."
    }
    if (Zeichen == "J") {
        Code = ".---"
    }
    if (Zeichen == "K") {
        Code = "-.-"
    }
    if (Zeichen == "L") {
        Code = ".-.."
    }
    if (Zeichen == "M") {
        Code = "--"
    }
    if (Zeichen == "N") {
        Code = "-."
    }
    if (Zeichen == "O") {
        Code = "---"
    }
    if (Zeichen == "P") {
        Code = ".--."
    }
    if (Zeichen == "Q") {
        Code = "--.-"
    }
    if (Zeichen == "R") {
        Code = ".-."
    }
    if (Zeichen == "S") {
        Code = "..."
    }
    if (Zeichen == "T") {
        Code = "-"
    }
    if (Zeichen == "U") {
        Code = "..-"
    }
    if (Zeichen == "V") {
        Code = "...-"
    }
    if (Zeichen == "W") {
        Code = ".--"
    }
    if (Zeichen == "X") {
        Code = "-..-"
    }
    if (Zeichen == "Y") {
        Code = "-.--"
    }
    if (Zeichen == "Z") {
        Code = "--.."
    }
    for (let Index = 0; Index <= Code.length; Index++) {
        if (Code.substr(Index, 1) == ".") {
            Dit()
        }
        if (Code.substr(Index, 1) == "-") {
            Dah()
        }
        if (Index < Code.length) {
            Symbolabstand()
        }
    }
}
function MorceCode (Satz: string) {
    for (let Index = 0; Index <= Satz.length; Index++) {
        CodeTabelle(Satz.substr(Index, 1))
        if (Index < Satz.length) {
            if (Satz.substr(Index + 1, 1) == " ") {
                Wortabstand()
            } else {
                Buchstabenabstand()
            }
        }
    }
}
function Symbolabstand () {
    basic.pause(dit)
}
let Code = ""
let Dauermodus = 0
let Text = ""
let dah = 0
let dit = 0
dit = 333
dah = 3 * dit
Text = "CALLIOPE MINI "
Dauermodus = 0
basic.forever(function () {
    if (Dauermodus) {
        MorceCode(Text)
    }
})
