---
layout: ../layouts/Base.astro
title: "Dachfenster‑Kosten 2025 – Interaktiver Kalkulator, Preisfaktoren & Praxisbeispiele"
description: "Rechne Dein Budget in 30 Sekunden: Gesamtkosten aus Fenstertyp, Größe, Innenfutter & Einbauhöhe – plus 3 Praxisfälle."
pubDate: 2025‑06‑25
---

# Dachfenster‑Kosten in 30 Sekunden berechnen

<label>Anzahl Fenster (1–10): <input id="qty" type="number" min="1" max="10" value="1"></label>
<label>Fenstertyp  
<select id="type">
  <option value="0">Schwingfenster (Standard)</option>
  <option value="180">Klapp‑/Schwing</option>
  <option value="290">Elektrisch INTEGRA</option>
</select></label>
<label>Innenfutter  
<select id="liner">
  <option value="85">Gipskarton (+85 €)</option>
  <option value="190">Holz weiß lackiert (+190 €)</option>
  <option value="0">Keins (Eigenleistung)</option>
</select></label>
<button onclick="calc()">Kosten ausrechnen</button>

> **Ergebnis:** <span id="result" style="font-weight:bold">–</span>

<script is:inline>
  function calc(){
    const q = +document.getElementById('qty').value||1;
    const base = 950;
    const typeUp = +document.getElementById('type').value;
    const liner = +document.getElementById('liner').value;
    const labour = 330;
    const total = (base+typeUp+liner+labour)*q;
    document.getElementById('result').innerText =
      total.toLocaleString('de‑DE') + " € inkl. MwSt.";
  }
</script>

---

## Was treibt den Preis hoch?

| Faktor | Ø Aufpreis | Tipp zum Sparen |
|--------|-----------:|-----------------|
| 3‑fach‑Verglasung | 130 € | Nur < 20° Dachneigung |
| Aufkeilrahmen | 140 € | Bei 45° unnötig |
| Gerüst (> 5 m) | 90 € | Rollgerüst mieten |
| RC2‑Einbruchschutz | 75 € | Gleich mitbestellen, Nachrüsten teurer |
| **BAFA‑Förderabzug** | *‑15 %* | s. Seite *Förderung & §35c* |

---

## Praxisbeispiel 1 – Reihenhaus Köln

- **2 × Schwingfenster, RC2, Innenfutter Holz**  
- Material = 2 × (950+75+190) = 2 640 €  
- Einbau = 2 × 310 € = 620 €  
- **Gesamt brutto** = **3 260 €**  
- BAFA 15 % iSFP → 489 € Zuschuss → **2 771 € Effektiv**

*(Praxisbeispiele 2 & 3 folgen – Dachgeschoss‑Ausbau, Denkmalschutzhaus …)*

---

## FAQ

**Warum schwanken Angebote um > 20 %?**  
Regionale Lohnkosten + Saisonaufschlag Juli/Aug.

**Kann ich selber einbauen?**  
Ja, aber Gewährleistung entfällt. Spar‑potenzial max. 25 %.

*(Verlinke hier intern auf „Umrüsten vs. Neubau“ und „U‑Wert & Nachweis“).*
