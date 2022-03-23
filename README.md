# hahuapi

1. REST API nem szereti a powershellt, szóval át kell tenni command promptra.
2. Ha nem használtad még a rest apit, akkor "npm install -g express-generator", ha igen, akkor skip.
3. Project létrehozás: express --no-view név
4. Menj bele a létrehozott mappába.
5. Telepíted a modulokat. (mongoose, nodemon, stb.)
6. Package.jsonba átírod az indító parancsot, ha használsz nodemont

### 2. feladat: Adatbázis létrehozása
a. A local mongoDB szerver elindítása: cmd -> mongod (az ablak bezárása leállítja a szervert)

7. Indítasz egy compasst.
8. Elérési útnak megadod a "mongodb://127.0.0.1:27017" címet.

### 5. feladat: POST kérés küldése az adatbázisra
9. A headerben meg kell adni a Content-Type-ot, ami application/json
10. Bodyban meg kell adni az értékeket json formátumban, mint pl.
"{
     "_id": 34,
     "kategoria": 1,
     "cim": "Traktor 79",
     "leiras": "Erős",
     "hirdetesDatuma": "2012-01-01",
     "serulesmentes": true,
     "arFt": 25000,
     "kepUrl": "https://google.com"
 }"
