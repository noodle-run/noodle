import fs from 'node:fs/promises';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
function parseFrontmatter<T extends Record<string, unknown>>(
  fileContent: string,
) {
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(fileContent);
  if (!match) {
    throw new Error('No frontmatter found');
  }
  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock?.trim().split('\n');
  const metadata: Partial<T> = {};

  frontMatterLines?.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    if (!key) {
      throw new Error('Invalid frontmatter');
    }
    (metadata as Record<string, unknown>)[key.trim()] = value;
  });

  return { metadata: metadata as T, content };
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
async function getMDXData<T extends Record<string, unknown>>(dir: string) {
  const files = await fs.readdir(dir);
  const mdxFiles = files.filter(
    (file) => path.extname(file) === '.mdx' || path.extname(file) === '.md',
  );

  const mapped = await Promise.all(
    mdxFiles.map(async (file) => {
      const rawContent = await fs.readFile(path.join(dir, file), 'utf-8');
      const { metadata, content } = parseFrontmatter<T>(rawContent);
      const slug = path.basename(file, path.extname(file));
      return {
        metadata,
        slug,
        content,
      };
    }),
  );

  return mapped;
}

interface BlogMetadata {
  [key: string]: unknown;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

interface LegalMetadata {
  [key: string]: unknown;
  title: string;
  effectiveDate: string;
}

export function getBlogPosts() {
  return getMDXData<BlogMetadata>(path.join(process.cwd(), 'src/content/blog'));
}

export function getLegalDocs() {
  return getMDXData<LegalMetadata>(
    path.join(process.cwd(), 'src/content/legal'),
  );
}
