import { readFile, mkdir, copyFile, cp, writeFile } from 'node:fs/promises';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const output=resolve(process.argv[2]||resolve(root,'dist'));
if(output===root||relative(output,root)===''||!relative(output,root).startsWith('..'))throw Error('Build output must not contain the source directory.');
const html=await readFile(resolve(root,'index.html'),'utf8');
const files=['index.html',...new Set([...html.matchAll(/(?:src|href)="([^"?#]+)(?:[^\"]*)"/g)].map(m=>m[1]).filter(s=>!s.startsWith('http')&&!s.startsWith('//')&&!s.startsWith('#')))];
await mkdir(output,{recursive:true});
const manifest={version:'travel-economy-1',languages:['ru','en','ja'],files:{}};
for(const file of files){if(file.startsWith('/')||file.includes('..'))throw Error('Invalid static path');const data=await readFile(resolve(root,file));await mkdir(dirname(resolve(output,file)),{recursive:true});await copyFile(resolve(root,file),resolve(output,file));manifest.files[file]=createHash('sha256').update(data).digest('hex');}
await cp(resolve(root,'assets'),resolve(output,'assets'),{recursive:true});
await writeFile(resolve(output,'.nojekyll'),'');
await writeFile(resolve(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Static game built: ${output} (${files.length} entry files + assets, RU/EN/JA)`);
