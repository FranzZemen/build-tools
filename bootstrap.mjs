import {cwd} from 'node:process';
import {resolve} from 'node:path';

export function bootstrap(optionsFileName) {
  console.log('bootstrapping...');
  optionsFileName = optionsFileName ?? './config/options.json';
  console.log(`Options File Name: ${optionsFileName}`);
}

console.log(`Resolved cwd: ${resolve(cwd())}`);

bootstrap();
