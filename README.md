# 500 Hooks 

`npm run dev` to run dev mode

---
---

Explaining common React Hooks using the card game 500

|                                       	| useState                                                            	| useReducer                                                      	| useEffect                                     	| useContext                                          	|
|---------------------------------------	|---------------------------------------------------------------------	|-----------------------------------------------------------------	|-----------------------------------------------	|-----------------------------------------------------	| 
| What does it do?                      	| Stores data and completes straightforward transformations           	| Stores data and completes complicated data transformations      	| Adjusts states based on interactivity changes 	| Stores global data, accessible anywhere in your app 	|
| Important details                     	| ?create a copy of state and amend copy, don't directly modify state 	|  useReducer details                                                               	| ?infinite re-render, pass an empty array      	| useContext details                                                    	|
| How does this apply to a game of 500? 	| Total score of each team, players on each team?                     	| 'Bid' on the round, performs action to update score after round 	|  useEffect 500                                             	| Players, current trump, who won bid                 	|
