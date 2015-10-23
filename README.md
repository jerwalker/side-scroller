## What you're trying to do:
When the user scrolls down, the hero appears to be flying to the right (the background moves, the hero doesn't).
But wait, there's nothing to scroll down to because the image is only as high as the browser window.
Modify the page using some of your jQuery skills to allow for a user to interact with the page and let our hero fly.


## What you have:
- A very wide image that has the exact same height as the browser window (height: 100%):
	- therefor the width is also dependent on the browser window since it scales automatically
	- The browser window automatically crops the overflow (hidden), so there is no horizontal scroll bar by design
	- The image is fixed, so it will never move - unless you move it manually
- A series of images that make up an animation
	- They are numbered in sequence


## Things you will need to know:
- The number of px of the image is overhanging off the right of the screen
	- What dimensions do you need to make that calculation?
	- What will you do with that number?
- The number of px that have been scrolled down by the browser
	- How can we apply that number to something directly?
	- How will that number drive our animated character?
		- Note: You may have to ask some questions that will take you beyond what's been taught


## Things to consider:
- What happens if you resize the page? Setup an event to reset the numbers on resize.
	- Instead of just rewriting the code to reset the page sizes, think of how you can trigger the same code for initialization as you do when the browser gets resized
- Can you affect the speed of the character?
