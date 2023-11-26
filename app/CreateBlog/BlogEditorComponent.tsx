'use client'

import { AdmonitionDirectiveDescriptor, MDXEditor, MDXEditorMethods, directivesPlugin, headingsPlugin, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin, BlockTypeSelect, listsPlugin, codeBlockPlugin, quotePlugin, markdownShortcutPlugin, linkPlugin, ChangeAdmonitionType, codeMirrorPlugin, KitchenSinkToolbar, linkDialogPlugin, diffSourcePlugin, frontmatterPlugin, imagePlugin, sandpackPlugin, tablePlugin, thematicBreakPlugin, SandpackConfig, } from "@mdxeditor/editor"
import { FC } from 'react'
import '@mdxeditor/editor/style.css'


interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

const array_of_allowed_files = ['png', 'jpeg', 'jpg'];
const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg'];

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim()


const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: 'react',
  presets: [
    {
      label: 'React',
      name: 'react',
      meta: 'live react',
      sandpackTemplate: 'react',
      sandpackTheme: 'light',
      snippetFileName: '/App.js',
      snippetLanguage: 'jsx',
      initialSnippetContent: defaultSnippetContent
    },
  ]
}
async function imageUploadHandler(image: File) {

  const name = image.name;
  const file_extension = name.slice(
    ((name.lastIndexOf('.') - 1) >>> 0) + 2
  );

  // Check if the uploaded file is allowed
  if (!array_of_allowed_files.includes(file_extension) || !array_of_allowed_file_types.includes(image.type)) {

    // Need a better way to handle this error:
    throw Error('Invalid file');

  } else {
    const formData = new FormData()
    formData.append('image', image)

    // send the file to Azure server and return 
    const response = await fetch('/api/UploadImage', {
      method: 'POST',
      body: formData
    })

    // Ensure the response contains the URL of the uploaded image
    if (response.ok) {
      const json = (await response.json()) as { url: string };
      return json.url;
    } else {
      throw new Error('Failed to upload image: ' + response.statusText);
    }
  }







}



export async function expressImageUploadHandler(image: File) {
  const formData = new FormData()
  formData.append('image', image)
  const response = await fetch('/uploads/new', { method: 'POST', body: formData })
  const json = (await response.json()) as { url: string }
  return json.url
}
/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
*/


const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return <MDXEditor ref={editorRef} markdown={markdown} plugins={[
    toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
    listsPlugin(),
    quotePlugin(),
    headingsPlugin(),
    linkPlugin(),
    linkDialogPlugin(),
    imagePlugin({ imageUploadHandler }),
    tablePlugin(),
    thematicBreakPlugin(),
    frontmatterPlugin(),
    codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
    sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
    codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
    directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
    diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
    markdownShortcutPlugin()
  ]} />
}

export default Editor
