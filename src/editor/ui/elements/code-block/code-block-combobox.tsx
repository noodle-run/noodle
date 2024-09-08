'use client';

import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';

import { Icon } from '@/primitives/icon';

import { Button } from '@/primitives/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/primitives/popover';

import 'prismjs/components/prism-antlr4.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-cmake.js';
import 'prismjs/components/prism-coffeescript.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/components/prism-csharp.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-dart.js';
import 'prismjs/components/prism-django.js';
import 'prismjs/components/prism-docker.js';
import 'prismjs/components/prism-ejs.js';
import 'prismjs/components/prism-erlang.js';
import 'prismjs/components/prism-git.js';
import 'prismjs/components/prism-go.js';
import 'prismjs/components/prism-graphql.js';
import 'prismjs/components/prism-groovy.js';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-kotlin.js';
import 'prismjs/components/prism-latex.js';
import 'prismjs/components/prism-less.js';
import 'prismjs/components/prism-lua.js';
import 'prismjs/components/prism-makefile.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-matlab.js';
import 'prismjs/components/prism-mermaid.js';
import 'prismjs/components/prism-objectivec.js';
import 'prismjs/components/prism-perl.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-powershell.js';
import 'prismjs/components/prism-properties.js';
import 'prismjs/components/prism-protobuf.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-r.js';
import 'prismjs/components/prism-ruby.js';
import 'prismjs/components/prism-sass.js';
import 'prismjs/components/prism-scala.js';
import 'prismjs/components/prism-scheme.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-wasm.js';
import 'prismjs/components/prism-yaml.js';
import { ScrollArea } from '@/primitives/scroll-area';
import {
  useCodeBlockCombobox,
  useCodeBlockComboboxState,
} from '@udecode/plate-code-block/react';
import { cn } from '@/lib/utils';
import { Input } from '@/primitives/input';

export { Prism };

const languages: { label: string; value: string }[] = [
  { label: 'Plain Text', value: 'text' },
  { label: 'Bash', value: 'bash' },
  { label: 'CSS', value: 'css' },
  { label: 'Git', value: 'git' },
  { label: 'GraphQL', value: 'graphql' },
  { label: 'HTML', value: 'html' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'JSON', value: 'json' },
  { label: 'JSX', value: 'jsx' },
  { label: 'Markdown', value: 'markdown' },
  { label: 'SQL', value: 'sql' },
  { label: 'SVG', value: 'svg' },
  { label: 'TSX', value: 'tsx' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'WebAssembly', value: 'wasm' },
  { label: 'ANTLR4', value: 'antlr4' },
  { label: 'C', value: 'c' },
  { label: 'CMake', value: 'cmake' },
  { label: 'CoffeeScript', value: 'coffeescript' },
  { label: 'C#', value: 'csharp' },
  { label: 'Dart', value: 'dart' },
  { label: 'Django', value: 'django' },
  { label: 'Docker', value: 'docker' },
  { label: 'EJS', value: 'ejs' },
  { label: 'Erlang', value: 'erlang' },
  { label: 'Go', value: 'go' },
  { label: 'Groovy', value: 'groovy' },
  { label: 'Java', value: 'java' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'LaTeX', value: 'latex' },
  { label: 'Less', value: 'less' },
  { label: 'Lua', value: 'lua' },
  { label: 'Makefile', value: 'makefile' },
  { label: 'Markup', value: 'markup' },
  { label: 'MATLAB', value: 'matlab' },
  { label: 'Mermaid', value: 'mermaid' },
  { label: 'Objective-C', value: 'objectivec' },
  { label: 'Perl', value: 'perl' },
  { label: 'PHP', value: 'php' },
  { label: 'PowerShell', value: 'powershell' },
  { label: '.properties', value: 'properties' },
  { label: 'Protocol Buffers', value: 'protobuf' },
  { label: 'Python', value: 'python' },
  { label: 'R', value: 'r' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Sass (Sass)', value: 'sass' },
  { label: 'Scala', value: 'scala' },
  { label: 'Scheme', value: 'scheme' },
  { label: 'Sass (Scss)', value: 'scss' },
  { label: 'Shell', value: 'shell' },
  { label: 'Swift', value: 'swift' },
  { label: 'XML', value: 'xml' },
  { label: 'YAML', value: 'yaml' },
];

export function CodeBlockCombobox() {
  const state = useCodeBlockComboboxState();
  const { commandItemProps } = useCodeBlockCombobox(state);

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  useEffect(() => {
    const filtered = languages.filter((lang) =>
      lang.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredLanguages(filtered);
  }, [searchTerm]);

  if (state.readOnly) {
    return null;
  }

  const handleSelect = (value: string) => {
    commandItemProps.onSelect(value);
    setOpen(false);
  };

  const selectedLanguage =
    languages.find((lang) => lang.value === state.value) ?? languages[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button aria-expanded={open} role="combobox" size="sm" variant="ghost">
          {selectedLanguage ? selectedLanguage.label : 'Plain Text'}
          <Icon
            name="ChevronsUpDown"
            className="ml-2 size-4 shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="p-2">
          <Input
            type="text"
            placeholder="Search language..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <ScrollArea className="h-[300px]">
          {filteredLanguages.length === 0 ? (
            <div className="p-2 text-center text-gray-500">
              No language found.
            </div>
          ) : (
            filteredLanguages.map((language) => (
              <Button
                key={language.value}
                variant="ghost"
                className={cn(
                  'w-full justify-start gap-2 rounded-none px-2',
                  state.value === language.value &&
                    'font-medium text-foreground',
                )}
                size="sm"
                onClick={() => {
                  handleSelect(language.value);
                }}
              >
                <Icon
                  name="Check"
                  className={cn(
                    'size-4',
                    state.value === language.value
                      ? 'opacity-100'
                      : 'opacity-0',
                  )}
                />
                {language.label}
              </Button>
            ))
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
