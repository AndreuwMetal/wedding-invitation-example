// Pega aquí el ID de tu Google Sheet (la parte entre /d/ y /edit de la URL).
const SHEET_ID = 'PEGA_AQUI_EL_ID_DE_TU_SHEET';
const SHEET_NAME = 'RSVP';

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('YOUR_TITLE')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function submitRSVP(payload) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Fecha envío', 'Nombre', 'Asistencia', 'Menú', 'Alergias / Especial', 'Mensaje', 'Email/Teléfono']);
    }
    sheet.appendRow([
      new Date(),
      payload.nombre || '',
      payload.asistencia || '',
      payload.menu || '',
      payload.alergias || '',
      payload.mensaje || '',
      payload.contacto || ''
    ]);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}
