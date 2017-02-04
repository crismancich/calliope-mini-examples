// Calliope Mini - Analogen wert lesen und in Volt umrechnen
// Autor:  Boris Crismancich <boris.crismancich@erminas.de>
// Lizenz: CC-BY-SA 3.0 de

let messwert = 0
let mv_pro_wert = 0
let millivolt = 0
let max_werte_adwandler = 0
let volt = 0
let max_mv_calliope = 0
basic.forever(() => {
    // Maximale Spannung in Millivolt, die der Calliope
    // erkennen kann
    max_mv_calliope = 3300
    // Größte Ausgabe des Analog-Digital-Wandlers
    max_werte_adwandler = 1023
    // Wie viel Millivolt entsprechen einem AUsgabewert
    // von 1?
    mv_pro_wert = max_mv_calliope / max_werte_adwandler
    // Messung
    messwert = pins.analogReadPin(AnalogPin.P2)
    // Wert in Millivolt umrechnen
    millivolt = messwert * mv_pro_wert
    // Wert in Volt umrechnen
    volt = millivolt * 1000
    // Ergebnis in Volt (gerundet!) anzeigen
    basic.showNumber(volt)
    // 1 Sek warten
    basic.pause(1000)
})
volt = 0
millivolt = 0
messwert = 0
mv_pro_wert = 0
max_werte_adwandler = 0
max_mv_calliope = 0