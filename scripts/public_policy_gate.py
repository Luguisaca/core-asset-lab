#!/usr/bin/env python3
from pathlib import Path
import json, sys
required=['README.md','README.en.md','LICENSE','NOTICE','SECURITY.md','CONTRIBUTING.md','CODE_OF_CONDUCT.md','package.json','package-lock.json','.github/pull_request_template.md']
missing=[x for x in required if not Path(x).is_file()]
if missing:
    print('POLICY FAIL: missing required public files: '+', '.join(missing)); sys.exit(1)
pkg=json.loads(Path('package.json').read_text(encoding='utf-8'))
errors=[]
if pkg.get('license')!='PolyForm-Noncommercial-1.0.0': errors.append('package.json license does not match approved public license')
if pkg.get('private') is not True: errors.append('package.json must remain private:true (not an npm publication package)')
if not pkg.get('engines',{}).get('node'): errors.append('Node engine policy missing')
if errors:
    print('POLICY FAIL'); print('\n'.join(errors)); sys.exit(1)
print('POLICY PASS')
