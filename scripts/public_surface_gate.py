#!/usr/bin/env python3
from pathlib import Path
import re, sys, subprocess
tracked=[Path(x) for x in subprocess.check_output(['git','ls-files'],text=True).splitlines()]
forbidden_names={'AGENTS.md','docs/CURRENT-STATE.md','docs/EXTRACTION.md','docs/decisions/README.md','docs/decisions/0001-independent-project-foundation.md','docs/decisions/0002-github-pages-public-distribution.md'}
found=[]
for p in tracked:
    s=p.as_posix()
    if s in forbidden_names or s.startswith('docs/decisions/'):
        found.append(f'forbidden public file: {s}')
patterns=[
 ('private-key', re.compile(r'BEGIN [A-Z ]*PRIVATE KEY')),
 ('github-token', re.compile(r'github_pat_|gh[pousr]_[A-Za-z0-9]')),
 ('aws-key', re.compile(r'AKIA[0-9A-Z]{16}')),
 ('windows-user-path', re.compile(r'C:\\\\Users\\\\',re.I)),
 ('linux-home-path', re.compile(r'/home/[A-Za-z0-9._-]+/')),
 ('wsl-mount-path', re.compile(r'/mnt/[a-z]/',re.I)),
]
text_ext={'.md','.txt','.yml','.yaml','.json','.js','.mjs','.ts','.tsx','.astro','.css','.html','.toml','.ini','.env'}
for p in tracked:
    if p.suffix.lower() not in text_ext and p.name not in {'.gitignore'}: continue
    try: data=p.read_text(encoding='utf-8',errors='ignore')
    except OSError: continue
    for label,rx in patterns:
        if rx.search(data): found.append(f'{label}: {p.as_posix()}')
if found:
    print('PUBLIC SURFACE FAIL')
    print('\n'.join(sorted(set(found))))
    sys.exit(1)
print(f'PUBLIC SURFACE PASS ({len(tracked)} tracked files checked)')
