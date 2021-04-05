# 500 Hooks 

`npm run dev` to run dev mode

---
---

Explaining common React Hooks using the card game 500

|                                       	| useState                                                                	| useEffect                                                                                                                                  	| useContext                                                 	| useReducer                                                  	|
|---------------------------------------	|-------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------	|-------------------------------------------------------------	|
| What does it do?                      	| Stores data and makes straightforward data changes                      	| Manages the side-effects (interactivity) of rendered components. Only runs after the page has rendered                                     	| Stores global data, accessible anywhere in your app        	| Stores data and completes more complex data transformations 	|
| Important details                     	| TBC: Create a copy of state and amend copy, don't directly modify state 	| Risk of an infinite re-render, pass an empty array as a dependency to stop it. Only runs after components have rendered, not during render 	| Prevents need to pass data as props through component-tree 	| Good for state data with nested fields and values           	|
| How does this apply to a game of 500? 	| Total score of each team, Players on each team                          	| Animate page when a team reaches 500                                                                                                       	| Players, Current trump suit, Who won bid                   	| 'Bid' on the round, Update score at the end of each round   	|

---
---
