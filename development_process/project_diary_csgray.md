# Project Diary

### 07 February 2018
#### 1530 - 1630
* Brainstormed user stories during class with Cameron.

We came up with a rather elaborate version of Battleship for up to four players who cooperate against a kraken that is
trying to drag their combined fleets down into a whirlpool. Each turn, players can shoot at the kraken or try to clear
the board of the hidden tentacles that lie in wait in front of their ships. If a tentacle hits a ship, the ship is
damaged/destroyed, so players are forced to balance defeating the boss or preserving their ships. They have to hurry because if
a ship reaches the whirlpool then it is destroyed. Ideally, this would be played online.
 
#### 2000 - 2100
* Transferred user stories to Google Sheet.
* Created GitHub repo and Gitter integration.
* Emailed Cameron and Duane.
* Created project_diary.md and README.md.
 
I took the user stories from class today and put them in a Google Sheet so that everyone, including Duane who is out of
town, can see them and add to them. I rewrote them to follow the "As a \<role\> I want \<feature\> so that \<benefit\>" format
which seemed forced at times but worked out.

### 08 February 2018
#### 2130 - 2200
* Estimated user story difficulty using an asynchronous Planning Poker method on a Fibonacci scale.

At work, we estimate the difficulty of our tasks by playing [Planning Poker](https://www.planningpoker.com/) with our
[LeanKit](https://leankit.com/) cards. The benefit of Planning Poker is that the team estimates the difficulty of cards
together without knowing what everyone else is thinking, so you benefit from crowd-sourced estimates, which are more
accurate, while avoiding subconscious influences. We assign points on a Fibonacci scale and round the average up to the
next number in the series. The points themselves are arbitrary with 

To actually play Planning Poker, everyone needs to be online at the same time. That wasn't working for us with Duane out
of town, so I created separate sheets in the Google Doc. Everyone assigns their estimates on their own sheets without
peeking at the other sheets.

#### 2300 - 2310
* Averaged scores.
* Assigned final values to user stories.

Once everyone put their estimates on their sheets, I averaged them together and updated the master sheet. We'll rank
them real quick before class when everyone can talk it out.

### 14 February 2018
#### 1800 - 1845
* Looked at Python options with Cameron then decided to use JavaScript instead.
* Setup development environment.

We were going to do this project in Python as Cameron wants to learn that language, but the more we looked into it the
less feasible it seemed. There are Python game libraries out there, but they were not working well. A couple of the more
promising libraries said they were modified versions of JavaScript libraries. JavaScript is _the_ scripting language of
the web and ideal for games like this, so we finally decided to do this project in JavaScript. After that, we each spent
some time setting up our development environments and making sure we were on the same page to start coding.

I have not written JavaScript before, so I'll start by going through Udacity's
[Intro to JavaScript](https://classroom.udacity.com/courses/ud803) course.

### 15 February 2018
#### 1800 - 2000
* Went through Phaser.io tutorial with Cameron and added it to the project.

Cameron learned about [Phaser](http://phaser.io/) and thought it would be good for our project. We met in the Nook then
worked through the tutorials together, and I think he is right. The documentation is a bit lacking, but the library
handles the complicated parts of making objects and we can host a development platform using http-server on our machines
and test our changes as we make them.

### 18 February 2018
#### 0030 - 0130
* Configured GitHub Pages so that we can host the game on GitHub.
* Verified with Phaser test app.
* Tested and updated development environment instructions. 
* Created Project board and added user stories to it as cards.

More administrivia tonight. The most productive part of the evening was configuring GitHub Pages to host our game right
out of the repository. I had to make some changes to the existing file structure and update the instructions for
setting up the development environment, but now [our game](https://csgray.github.io/cs372-battleship/) is available
from anywhere in the world and automatically updates itself whenever we merge features into master. I also created cards
on GitHub's Project board for our user stories so that we can experiment with a kanban board.

#### 1330 - 1630
* Created game grids.
* Created ship sprites.
* Created hit, miss, and damage tokens.
* Added mouse control for placing ships on the game grid.
* Started on ship rotation and collision detection.

Cameron, Duane, and I met in the Nook for... trio programming? We used one of the collaboration spaces and whoever was
driving plugged their laptop into the large monitor so that everyone could see what they were doing. It was a fun,
productive session. Whoever was doing the most interesting work at any particular moment was driving while the others
read documentation (Phaser's documentation is unfortunately lacking) or made game assets. At the end of the three hours,
I felt like we had made significant progress and I felt validated in our choice of library. Using Phaser and getting
sprites from [Open Game Art](https://opengameart.org/content/sea-warfare-set-ships-and-more) made what was going to be
one of our most difficult tasks (creating a GUI) relatively easy.

Trio programming proved itself a few times. Not only did we catch errors in each other's code or find solutions for each
other's problems, but Duane even spotted errors in the graphics I put together in Paint. I doubt we could get many
artist-types to agree to pair painting though.

### 25 February 2018
#### 1500 - 1745
* Tried to figure out ship rotation.
* Removed redundant or half-formed code from master when that didn't work.
* Made ships part of a Phaser group.
* Fixed ship collision detection.

Today was as equally frustrating as our last group session was productive. Last time, things clicked and we made a lot
of progress on important features such as graphics, ship placement, and mouse control. Today we spent two hours trying
to get ship rotation to work to no avail. Rotating a ship still moves its bounding area so that it is no longer on the
game grid, and how much it moves the bounding area isn't consistent. Sometimes the bounding area becomes smaller than
it should be for no apparent reason.

Amusingly, earlier this week a coworker was telling me about the productivity/difficulty curve of writing things
by hand or using a library. When you write code by hand, it starts off difficult and largely unproductive but eventually
there is a tipping point and productivity skyrockets. When you use a library, there is an initial productivity boost,
but then things slow down to a crawl and take a while to recover when you try doing more complex tasks and have to dive
deep into the library to figure it out. That's where we are, and we're hindered by the lack of coherent documentation
or in-depth tutorials. It is mostly code samples from different uses, and I am strongly opposed to cargo cult
programming. I'm glad I went through the [Intro to JavaScript](https://classroom.udacity.com/courses/ud803) course so
that I have some idea what is going on.

In the end, we decided to remove the half-working code and clean-up master. I did reorganize the ship assets into a
group of game objects, which gives us more options for interacting with them, and I found a way to use the new group
to fix our collision detection issues. Unless you try rotating the ships.

A refactoring is on the horizon.

#### 2100 - 2130 
* Updated project diary.

Nothing special tonight. I added a couple of entries and fleshed out the rest with more details about what we did and
my thoughts on the process.