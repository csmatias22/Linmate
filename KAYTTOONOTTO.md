# Linmate Oy — GitHub Pages -julkaisuohjeet

## Julkaisu

1. Avaa GitHubissa sivuston repositorio. Lataa **tämän ZIP-paketin sisältö** repositorion juureen (ei sisäkkäisenä kansiona).
2. Avaa **Settings → Pages → Build and deployment** ja valitse Deploy from a branch, branch `main`, folder `/(root)`.
3. `CNAME` sisältää `linmate.fi`. Aseta verkkotunnuksen DNS GitHub Pagesin virallisten ohjeiden mukaisesti (apex-domainin A/AAAA-tietueet; `www`-osoitteelle CNAME, jos käytössä). Aseta GitHub Pagesissa Custom domain = `linmate.fi`, ja varmista HTTPS. Älä vaihda DNS-tietueita ennen kuin varmistat, etteivät sähköpostin MX/SPF/DKIM-tietueet muutu.
4. Testaa etusivun yhteydenottolomake, yhteystietosivun tarjouspyyntölomake sekä lämpökamerakuvaussivun lomake.

## ERITTÄIN TÄRKEÄÄ: Lomakkeiden aktivointi

GitHub Pages ei tarjoa lomakepalvelinta. Lomakkeet on asetettu lähettämään ulkoiseen **FormSubmit.co**-palveluun vastaanottajalle `matias@linmate.fi`. Ensimmäinen testilähetys käynnistää palvelun lähettämän **vahvistusviestin**. Vahvista osoite viestissä olevalla linkillä ennen kuin käytät lomaketta asiakkaille. Tarkista tämän jälkeen todellisen testiviestin saapuminen sekä etusivulta että tarjouspyynnöstä. Toimitusta ei ole testattu verkossa etukäteen. Palvelun saatavuus, ilmaisrajoitukset, mahdollinen CAPTCHA ja tietosuojakäytännöt ovat ulkoisen palveluntarjoajan ehtojen mukaisia.

**Huomio:** `_next` ohjaa osoitteeseen `https://linmate.fi/kiitos.html`. Jos julkaiset ensin GitHubin `github.io`-osoitteessa ennen oman verkkotunnuksen käyttöönottoa, muuta lomakkeiden `_next` väliaikaisesti testiosoitteeseen (tai poista kenttä).

## Kuvitukset ja logo

- Logo: `assets/linmate-logo.png` ja kevyempi `assets/linmate-logo.webp`, näkyy kaikilla sivuilla ylä- ja alatunnisteissa.
- Kuva-aineisto: `assets/images/*.webp`. **Kaikki kuvat ovat havainne-/kuvituskuvia**, eivät Linmaten toteutuneita asiakastöitä tai referenssejä. Vaihda ne aitoihin kuviin myöhemmin.
- Selainkuvake `assets/favicon.svg`.

## Ennen mainontaa

- **Tietosuoja:** tarkista ja täydennä tietosuojaseloste palvelujen, lomakkeen vastaanottajan ja tietojen säilyttämisen osalta. FormSubmit on ulkoinen henkilötietojen käsittelijä; arvioi palvelun soveltuvuus ja tietojen siirtoperusteet ennen henkilötietojen keräämistä. Harkitse tietosuojan kannalta sopivampaa EU-palveluntarjoajaa tarvittaessa.
- Yrityksen nimi, yhteystiedot, väitteet ja palvelualueet on tarkistettava yrityksen todelliseen toimintaan nähden.
- Lomakkeen vapaaehtoinen kuvaliite kannattaa testata: liitetiedoston vastaanotto riippuu FormSubmitin ominaisuuksista ja palvelurajoituksista.
- Google Analytics / Ads ei ole käytössä; ota seuranta käyttöön vasta mittaustunnuksilla ja soveltuvalla suostumusratkaisulla.
- Testaa mobiili ja saavutettavuus käytännössä sekä Lighthouse / Core Web Vitals julkaisun jälkeen.

## Sivusto

Staattinen sivusto toimii GitHub Pagesilla ilman Node.js:ää, rakentamista tai maksullista webhotellia. HTML, CSS ja JS julkaistaan sellaisenaan.


## Versio ilman kuvituskuvia

Kaikki sivuston valokuva- ja AI-kuvitusosiot sekä kuva-assetit on poistettu. Linmate Oy:n logo on säilytetty headerissa ja footerissa. Kuvapaikkojen jättämät tyhjät palstat on poistettu CSS-asettelusta. GitHub Pages toimii staattisena sivustona; FormSubmit-lomakkeiden toimitus pitää testata ja vastaanottajan osoite vahvistaa ennen julkaisua.


## Uudistus 10.11.2026

- Uusi yhtenäinen kuvattoman sivuston visuaalinen ilme; vanhat tekoälykuvituskuvat eivät kuulu tähän pakettiin.
- Hyväksytty logo on säilytetty muuttumattomana `assets/linmate-logo.webp` ja `.png`.
- Palvelut-avausvalikko, lämpökamerakuvauksen oma sivu, selkeä lämpökuvausnosto etusivulla ja lämpökuvausvalinnat lomakkeilla.
- Maksuttoman kuvauksen tarjous ei velvoita ostamaan: kuvaus riippuu riittävistä lämpötilaeroista ja sopivista sääolosuhteista.
- FormSubmit toimii GitHub Pagesin staattisessa ympäristössä, kun vastaanottajan sähköposti on aktivoitu ja lomakkeet testattu.
- Testaa kaikki kolme lomaketta ja niiden onnistumissivu. Puhelinnumeron ja tietojen vastaanoton toimivuutta ei voi vahvistaa paikallisesti.
- Tarkista tietosuojaselosteen FormSubmit-käsittelytiedot ja lämpökuvauspalvelun käytännön toteutus ennen julkaisua.
- Varmista markkinoinnin alkaessa kuvausolosuhteet, käytettävissä oleva kalusto ja palvelualueet.


## Ovien huolto ja tiivistys (uusi palvelu)
- Sivulle `ovien-huolto-ja-tiivistys.html` pääsee palveluvalikosta, etusivulta sekä alatunnisteesta.
- Tarjouslomakkeessa voi valita `Ovien huolto ja tiivistys`.
- Palvelun soveltuvuus ja tarkka työn sisältö määritetään aina ovimallin ja kunnon mukaan.
- GitHub Pages -julkaisuun riittää kaikkien tiedostojen siirtäminen repositorion juureen.
