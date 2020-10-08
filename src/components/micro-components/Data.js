import GoogleSpreadSheet from 'google-spreadsheet'

const doc = new GoogleSpreadSheet('1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE');

await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
})

await doc.loadInfo();
console.log(doc.title);

