// place files you want to import through the `$lib` alias in this folder.
interface CodeSnippetInput {
	title:string
	language:string
	code:string
}
interface CodeSnippet extends CodeSnippetInput{
	favorite:boolean
}