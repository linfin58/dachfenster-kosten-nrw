---
layout: ../layouts/Base.astro
title: "Dachfenster‑Kosten 2025 – Interaktiver Kalkulator & Praxisbeispiele"
description: "Gesamtkosten für 1 – 3 Dachfenster in 30 Sekunden berechnen – inkl. Preis­faktoren & 3 Praxisfällen (2025)."
pubDate: 2025‑06‑25
---

<h2>Dachfenster‑Kosten in&nbsp;30 Sekunden berechnen</h2>

<!-- Formular -------------------------------------------------------- -->
<label>Anzahl&nbsp;Fenster&nbsp;(1‑10):
  <input id="qty" type="number" min="1" max="10" value="1">
</label>

<!-- Dropdown Fenstertyp -->
<select id="type">
  <option value="0">Schwingfenster (Standard)</option>
  <option value="180">Klapp/Schwing</option>
  <option value="290">Elektro INTEGRA</option>
  <option value="450">Panorama‑Klapp</option>            <!-- NEU -->
  <option value="600">Flachdach‑Kuppel</option>          <!-- NEU -->
</select>

<!-- Dropdown Innenfutter -->
<select id="liner">
  <option value="85">Gipskarton (+85 €)</option>
  <option value="190">Holz weiß lackiert (+190 €)</option>
  <option value="0">Keins (Eigenleistung)</option>
  <option value="260">Kunststoff-Fertigfutter (+260 €)</option> <!-- NEU -->
</select>


<!-- Button -->
<button onclick="calcPrice()">Kosten ausrechnen</button>

<!-- Skript -->
<script is:inline>
function calcPrice(){
  const q      = +document.getElementById('qty').value || 1;
  const base   = 950;
  const typeUp = +document.getElementById('type').value;
  const liner  = +document.getElementById('liner').value;
  const labour = 330;
  const total  = (base + typeUp + liner + labour) * q;
  document.getElementById('result').innerText =
       total.toLocaleString('de-DE') + ' € inkl. MwSt.';
}
</script>

<p><strong>Ergebnis:</strong> <span id="result">–</span></p>

---

### Was treibt den Preis hoch?

| Faktor                       | Ø Aufpreis | Tipp zum Sparen               |
|------------------------------|-----------:|-------------------------------|
| 3‑fach‑Verglasung            | 130 €      | Nur < 20 ° Dachneigung        |
| Aufkeilrahmen                | 140 €      | Bei 45 ° unnötig              |
| Gerüst &gt; 5 m              |  90 €      | Rollgerüst mieten             |
| RC2‑Einbruchschutz           |  75 €      | Gleich mitbestellen           |
| BAFA‑Förderabzug (–15 %)     | −          | s. Seite „Förderung & § 35c“  |

<!-- darunter – Praxisbeispiele wie bisher … -->

