# rezzSite
I don't like the current [REZZ](http://officialrezz.com/) website.
- It doesn't support HTTPS
- Every time you click on a link, it opens a new tab
- This significantly slows down the UX, especially when not on WiFi
- The page looks very bland
- Overall seems like it was thrown together quickly..

For an aritst whose brand is appreciated for its **iconic visuals and graphic design**, the website doesn't deliver the same effect.
I aim to improve this website. This is a way for me to learn/apply web design while I finish my computer science bachelor's degree.
*This is not for profit. I don't own the rights to any of this content. Please don't sue me.*

# Instructions to view the new site:
- Download/clone this repository
- Open any web browser (Chrome, Safari, FireFox, etc.) 
- Open a new tab
- Hit Command + O *(Ctrl + O on Windows)*
- Navigate to the folder where you saved this repository (it should be titled rezzSite)
- Open the index.html file

## Improved Features
- Dynamic styling. The current site allows weird zooming.
- Link redirecting. In mobile, it works fine if the user has the corresponding apps. On Desktop, it opens a new tab every time the user clicks a new link.

## New Features 
- Dynamic map (Tour page)
	- Shows where the next show is by flying a spaceship to the location of the venue
	- Will use JSON objects to get the state (maybe address?) of the venue
	- Will probably have to use Google Maps API in combination with something else
- Dynamic visuals
	- Mobile version:
		- Consider users' data usage, make this basic to load fast
		- Alien hand blinks
	- Desktop version:
		- User will have access to more data, still want to make this load fast
		- Spinning goggles, color spectrum
		- Do some fancy geometric work on the front end
- Tweet feed/news
	- shows Rezz's most recent tweet
- Snek game
	- This will require a database for a scoreboard
	- If it becomes popular, will need to implement usernames/logins
		- People can keep track of their own scores
		- No one can pretend to be someone else
- Email Newsletter
	- Tours
	- New music 
	- New merch
	- Merch sales (Black Friday, Limited edition, etc)

### reminders to myself
- JSON Date range for multi-day events (and/or) music festivals