'use client'
import { ReactFCWithChildren } from '@/react';
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';
export const EditorMonaco: ReactFCWithChildren = () => {
    function handleEditorChange(value: string | undefined, ev: editor.IModelContentChangedEvent) {
        ev
        console.log('here is the current model value:', value);
    }
    return <Editor
        defaultValue={`import Image from 'next/image'
import { useParams } from 'next/navigation'


export default function ColladeLink() {
  const { id } = useParams<{ id?: string }>()
  return (

    id &&
    <p className=' rounded-full p-2 justify-center items-center flex gap-2 text-gray-500'>
      <Image src="/assets/images/link.svg" width={16} height={16} alt='link' />
      <span className=''>
        {\`.../\${id.slice(-10)}\`}
      </span>
    </p>

  )
}
`}
        defaultLanguage='dart'
        theme='vs-dark'
        language='typescript'
        height={"550px"}
        onChange={handleEditorChange}
    />
};