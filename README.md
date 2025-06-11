
# Livefront Code Challenge

This project is a React app that utilizes APIs from [Open Library](https://openlibrary.org/developers/api) to display a list of books about interior design. When the user clicks on either a book cover or a book title, it will navigate to a detail page, which contains information about the selected book. 

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the tests:

```bash
npm run test
```

## Open Library APIs

-   [Subjects API](https://openlibrary.org/dev/docs/api/subjects) — Used to fetch books by subject name
-   [Covers API](https://openlibrary.org/dev/docs/api/covers) — Used to fetch book covers by Open Library identifier (or ISBN)

Note: Some books do not have cover images stored on Open Library. In the application, if a book does not have a cover, a white rectangle with a border is displayed instead.

## Packages installed

-   React version 19
-   NextJS version 15
-   TypeScript
-   Sass
-   Jest
-   ESLint  
    
Other tools used:

-   Favicon generator: [https://favicon.io/](https://favicon.io/)  
    
## Project structure

-   Components
	-   `app/page.tsx` — Home component
	-   `BookCover` — A reusable component containing the NextJS `Image` component with adjustable properties
	-   `BookList` — Contains the list of books, displayed as a grid

-   Routes
	- `detail/[id]/page` — A dynamic route for the book detail page. The page displays the book's title, the book cover, and some information about the book.

-   Context:
	- `context/DataContext` — Contains the fetch call used to retrieve the book list data. I used Context because it centralizes the logic, which makes it easier to manage and update the data across the application. It is also better for scalability. 

-   Test file:
	- `context/__tests__/api.test.tsx` — There are two tests for the fetch call: one to test that the data was fetched successfully, and another to test that the error handling is working.

-   Stylesheet:
	- `styles/global.scss` — Because this is a small app, I used a single stylesheet. I also used BEM (Block-Element-Modifier) for better readability and scalability.
