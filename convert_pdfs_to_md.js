const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_SOURCE_DIR = path.join(__dirname, 'source-pdfs');
const DEFAULT_OUTPUT_DIR = path.join(process.cwd(), 'markdown-output');

const MOJIBAKE_REPLACEMENTS = [
  ['ÃƒÂ¬', 'ì'],
  ['ÃƒÂ²', 'ò'],
  ['ÃƒÂ¹', 'ù'],
  ['ÃƒÂ ', 'à'],
  ['ÃƒÂ¨', 'è'],
  ['ÃƒÂ©', 'é'],
  ['ÃƒÂ€', 'À'],
  ['ÃƒÂˆ', 'È'],
  ['ÃƒÂ‰', 'É'],
  ['ÃƒÂŒ', 'Ì'],
  ['ÃƒÂ’', 'Ò'],
  ['ÃƒÂ™', 'Ù'],
  ['ÃƒÂ§', 'ç'],
  ['ÃƒÂ±', 'ñ'],
  ['ÃƒÂ¼', 'ü'],
  ['ÃƒÂ¶', 'ö'],
  ['ÃƒÂ¤', 'ä'],
  ['Ã¢â‚¬â„¢', "'"],
  ['Ã¢â‚¬Ëœ', "'"],
  ['Ã¢â‚¬Å“', '"'],
  ['Ã¢â‚¬Â', '"'],
  ['Ã¢â‚¬â€œ', '-'],
  ['Ã¢â‚¬â€', '-'],
  ['Ã¢â‚¬Â¢', '•'],
  ['Ã¢â‚¬Â¦', '…'],
  ['Ã¯Â¬Â', 'fi'],
  ['Ã¯Â¬â€š', 'fl'],
];

function replaceAllLiteral(text, from, to) {
  return text.split(from).join(to);
}

function repairText(text) {
  const base = String(text || '').replace(/^\uFEFF/, '');
  const candidates = [base];

  try {
    candidates.push(Buffer.from(base, 'latin1').toString('utf8'));
  } catch {
    // Keep the original candidate.
  }

  let best = candidates[0];
  const score = (value) => (value.match(/[ÃÂâ�]/g) || []).length + (value.includes('ï¿½') ? 5 : 0);

  for (const candidate of candidates) {
    if (score(candidate) < score(best)) {
      best = candidate;
    }
  }

  for (const [source, target] of MOJIBAKE_REPLACEMENTS) {
    best = replaceAllLiteral(best, source, target);
  }

  return best;
}

function cleanText(text) {
  let out = String(text || '');
  out = out.replace(/\u00a0/g, ' ');
  out = out.replace(/\f/g, '\n\n');
  out = out.replace(/\r/g, '\n');
  out = out.replace(/[ \t]+\n/g, '\n');
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

function extractWithPdfToText(pdfPath) {
  const result = spawnSync(
    'pdftotext',
    ['-layout', '-nopgbrk', '-enc', 'UTF-8', pdfPath, '-'],
    { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
  );

  if (result.error || result.status !== 0) {
    return null;
  }

  return result.stdout || null;
}

function extractPdf(pdfPath) {
  const extracted = extractWithPdfToText(pdfPath);
  if (!extracted) {
    throw new Error(
      `Unable to extract ${path.basename(pdfPath)}. Install pdftotext (Poppler) or use the Python converter once.`
    );
  }

  const repaired = cleanText(repairText(extracted));
  return `# ${path.basename(pdfPath, '.pdf')}\n\n${repaired}\n`;
}

function convertDirectory({ sourceDir = DEFAULT_SOURCE_DIR, outputDir = DEFAULT_OUTPUT_DIR } = {}) {
  fs.mkdirSync(outputDir, { recursive: true });

  const pdfFiles = fs
    .readdirSync(sourceDir)
    .filter((name) => name.toLowerCase().endsWith('.pdf'))
    .sort((a, b) => a.localeCompare(b));

  for (const fileName of pdfFiles) {
    const pdfPath = path.join(sourceDir, fileName);
    const markdownPath = path.join(outputDir, `${path.basename(fileName, '.pdf')}.md`);
    const markdown = extractPdf(pdfPath);
    fs.writeFileSync(markdownPath, markdown, 'utf8');
    console.log(`Wrote ${path.basename(markdownPath)}`);
  }
}

function main(options = {}) {
  convertDirectory(options);
}

if (require.main === module) {
  main();
}

module.exports = { convertDirectory, extractPdf, main };
