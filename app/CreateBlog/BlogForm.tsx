'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { MDXEditorMethods } from '@mdxeditor/editor/dist/MDXEditor'
import React from 'react'
import { categories, users } from '@prisma/client'
import Loading from '../feed/loading'

const EditorComp = dynamic(() => import('./BlogEditorComponent'), { ssr: false })

const markdown = `
# Hello world!
Check the EditorComponent.tsx file for the code .

:::danger

Some **content** with _Markdown(#).

:::
`


export default function Home(props: { authors: users[], categories: categories[] }) {
  const ref = React.useRef<MDXEditorMethods>(null)

  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    if (!author || !title || !subtitle || !category || !ref.current?.getMarkdown()) {

    } else {
      console.log("In Submit - trying to submit following: " + "Author: " + author + "Title: " + title + "Subtitle: " + subtitle + "Category: " + category + "Content: " + ref.current?.getMarkdown())

      submitBlog(ref.current?.getMarkdown(), author, title, subtitle, category)
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">

        <p className='font-bold'>Which Author are you?</p>
        <select required value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 rounded bg-white text-gray-400">
          <option value="">Select Author</option>
          {props.authors.map((option: users) => (
            <option key={option.id} value={option.id}>
              {option.username}
            </option>
          ))}
        </select>

        <p className='font-bold'>Enter Your Blog Post's Title:</p>
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" placeholder="Title" />

        <p className='font-bold'>Enter Your Blog Post's Subtitle:</p>
        <input required type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="border p-2 rounded" placeholder="Subtitle" />

        <p className='font-bold'>Enter Your Blog Post's Category:</p>
        <select required value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded bg-white text-gray-400">
          <option value="">Select Category</option>
          {props.categories.map((option: categories) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

        <br />

        <p className='font-bold'>Create Your Blog:</p>

        <Suspense fallback={<Loading />}>
          <EditorComp markdown={markdown} editorRef={ref} />
        </Suspense>



        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
      </form>



    </div>
  )
}

const submitBlog = async (userMarkdown: string | undefined, authorID: string, title: string, subtitle: string, categoryID: string) => {


  try {
    console.log("Submitting....")
    console.log(userMarkdown)
    const response = await fetch('/api/NewBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ markdownContent: userMarkdown, authorID, title, subtitle, categoryID }),
    });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData);
    // Handle the response, maybe display a success message
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to upload Markdown: ' + error);
  }

};

