import { cpSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '../src/theme/presets');
const dest = resolve(__dirname, '../dist/themes');

if (existsSync(src)) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  cpSync(src, dest, { recursive: true });
  console.log('✓ Themes copied successfully to dist/themes');
} else {
  console.warn('! Theme presets directory not found at', src);
}
