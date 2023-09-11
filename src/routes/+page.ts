import type { PageLoad } from "./$types";

export const load = (()=>{
    return {
        snippets: [
            {
                title: "Tst Snippet 1",
                language:"html",
                code: "<div>a div</div>",
                favorite: true
            },
            {
                title: "sadgdsgasdgas",
                language:"css",
                code: "<div>a div</div>",
                favorite: true
            }
        ]
    }
}) satisfies PageLoad