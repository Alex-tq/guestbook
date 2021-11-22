Live website: https://guestbook-nine.vercel.app/

## Disclaimer

I had never used Next.js before and I had to learn over the weekend while I was also working, So everything might not be done in the standard way. However I enjoyed learning it and will keep on improving.

Please feel free to reach out with any questions you might have and any feedback will be appreciated.

# Layout and Proccess

- I created a new Next App with create-next-app to start from scratch and deleted some of the extra files and code from the Home component.

- Created the feed.js file for the guestbook page.

- Created a components folder to keep all my non-pages react components organized. Created a Layout component to wrap around the App component.

- Created a Nav component to make it easies to navigate between the home page and the guestbook page. Placed the Nav on the top of the Layout.

- Created a Form component and rendered it inside the home page.

- Created Guest component to reuse for every guest and a GuetList component to hold all the guests.

- Turned the form into a controlled component to let the state dictate the content.

- Created a guestbook api to handle post and get requests. created a data folder with a guests.js file containing an array of object to hold the data.

- created a handleSubmit in the Form component to check for empty fields, if anything is empty the form field will reset and display an error message. If the fields are not empty the form fields will reset, a success message will be displayed and the data will be posted to the guestbook API

- In the feed(guestbook) page, used getServerSideProps() to fetch the data from the guestbook API and render it everytime a new request is made. Passed the guests data as props to the GuestList.

- In the GuestList mapped over the all guests and created a Guest component for each one with the correstponding name and message.

## UI/UX

- used flexbox, and viewport units to make the website responsive.

- Used color contrast, scale and spacing principles to improve visuals and make the site more accessible.

## SEO

- Used the Head component on top of the Layout component with some meta tags and title to improve SEO.

- Since the home page won't change when the page loads, NextJS will automatically prerender it and serve it as a static html page. Because of this the website will load faster and help with SEO.




# nextjs-challenge-boilerplate
A basic boilerplate for nextjs challenge

You are responsible for writing a node app using nextjs. Your app will consist of two pages (a form, and a feed), and a server that reads and writes to the feed.

Challenge: Create a new Github project with NextJS and React that meets the following criteria:
1. Starts with the command `npm i && npm run dev`
2. Shows a form with “name” and “message” when it runs at localhost:3000
3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing).
4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form.
  - A link on that page exists to go back to the homepage
  - You do not need to persist that data in any database, just keep it in memory.

##### BONUS

Feel free to add the following
1. Add some UI/UX features
2. Unit tests (coverage)
3. Code linting

