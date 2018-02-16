# CS 372: Battleship

```
██████╗  █████╗ ████████╗████████╗██╗     ███████╗███████╗██╗  ██╗██╗██████╗ 
██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██║     ██╔════╝██╔════╝██║  ██║██║██╔══██╗
██████╔╝███████║   ██║      ██║   ██║     █████╗  ███████╗███████║██║██████╔╝
██╔══██╗██╔══██║   ██║      ██║   ██║     ██╔══╝  ╚════██║██╔══██║██║██╔═══╝ 
██████╔╝██║  ██║   ██║      ██║   ███████╗███████╗███████║██║  ██║██║██║     
╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝     
```

What happens when three CS students are tasked with making a Battleship game?

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/cs372-battleship/Lobby)

## Web Server
We are using node.js http-server for development: https://www.npmjs.com/package/http-server
 
Install node.js then in a terminal:

```npm install -g http-server```

Once http-server is installed, from the repo:

```http-server```

## User Stories
We each suggested features then individually and secretly assigned point values to them on a Fibonacci scale. Then we averaged the results and rounded up to the next number in the sequence.

| **Title**               | **Description**                                                                                                                                      | **Points** |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| Graphical Interface     | As a player, I want graphics because it is more fun and intuitive than just text.                                                                    | 13         |
| Ship Placement          | As a player, I want to be able to place my own ships so that I can develop my own strategy.                                                          | 5          |
| Ships That Shoot        | As a player, I want ship that can shoot so that I can win the game.                                                                                  | 5          |
| Mouse Control           | As a player, I want mouse control so that I can play the game in a way that feels intuitive.                                                         | 5          |
| Keyboard Control        | As a player, I want keyboard control so that I can play the game without a mouse.                                                                    | 5          |
| Submit moves button     | As a player, I want to have a submit move button so I can avoid pulling my hair out by making accidental moves                                       | 3          |
| Boss Fight              | As a player, I want a central boss so that I can have a different battleship experience.                                                             | 8          |
| Shared Boss HP          | As a player, I want the boss to have a shared life bar so that I can play co-op with a common goal.                                                  | 5          |
| Time-Based Game-Ender   | As a player, I want the boss to have a time-based game-ending final attack so that I can feel a sense of urgency.                                    | 5          |
| Additional Boss Attacks | As a player, I want the boss to have additional attacks so that I can make relevant strategic decisions.                                             | 5          |
| Offline/no data         | As a player, I want to play offline so I can play without data.                                                                                      | 5          |
| Multi-platform          | As a player, I want to be able to play this game on multiple platforms so I can involve friends who don’t use the same phone/operating system as me. | 13         |
| Online Multiplayer      | As a player, I want online multiplayer so that I can play with anyone from around the world.                                                         | 34         |
| Local Co-Op             | As a player, I want co-op play so that I can play with my friends.                                                                                   | 13         |
| Multiple Shots          | As a player, I want multiple shots based on how many ships that I have left so that I can feel like individual ships matter.                         | 3          |
| Different Ships         | As a player, I want ships with different abilities so that I can have more variety.                                                                  | 5          |
| Difficulty Settings     | As a player, I want different difficulty settings so that I can play at a level appropriate for my skill.                                            | 8          |
| Pirate Theme            | As a player, I want pirate ships so that I can make a bunch of "RELEASE THE KRAKEN!" jokes.                                                          | 3          |
| Lobby System            | As a player, I want a lobby system so that I can team with friends and not a bunch of randos.                                                        | 13         |
| Scoreboard              | As a player, I want a scoreboard so that I can brag about how awesome I am.                                                                          | 3          |
| Team Flags              | As a player, I want team flags so that I can feel a sense of camaraderie with my friends.                                                            | 3          |
| LAN                     | As a player, I want to play using LAN so I can play with friends at a gathering.                                                                     | 13         |
| Phone - based/option    | As a player, I want to be able to play on my phone so I can play games when I am waiting somewhere.                                                  | 34         |
| Save and resume         | As a player, I want to have a save feature so I can continue playing when I have more available time.                                                | 5          |
| Easy Interpretation     | As a player, I want to have a clean game screen so I can easily see who’s currently winning (has the most hits).                                     | 8          |
| Responsiveness          | As a player, I want to have a responsive game so I can spend more time playing and less waiting on it to respond.                                    | 5          |
