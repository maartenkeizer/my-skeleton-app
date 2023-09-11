import { get } from "svelte/store";
import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export interface CodeSnippetInput {
	title:string
	language:string
	code:string
}
export interface CodeSnippet extends CodeSnippetInput{
	favorite:boolean
}

const storeExample: Writable<CodeSnippet[]> = localStorageStore('snippets', []);

export let snippetStore = storeExample


export function addSnippet(input: CodeSnippetInput) {
    let snippets = get(snippetStore)
    snippetStore.update(() => {
        return [{ ...input, favorite: false }, ...snippets]

    })

}

export function deleteSnippet(index: number) {
    let snippets = get(snippetStore)
    snippets.splice(index, 1)
    snippetStore.update(() => {
        return snippets
    })

}
export function toggleFavorite(index: number) {
    let snippets = get(snippetStore)

    snippetStore.update(() => {
        return snippets.map((snippet, snippetIndex) => {
            if (snippetIndex === index) {
                return { ...snippet, favorite: !snippet.favorite }
            }

            return snippet
        })
    })

}