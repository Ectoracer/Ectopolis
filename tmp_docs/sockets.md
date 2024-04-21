Still trying to decipher this. I'll put URLs here as I find them I guess

* `wss://35-232-133-54.exoracer.io/10-116-2-105`

Messages:
* raw data? have to figure this out somehow. it's not level or replay data i don't think
* `{"type": "PING","time": 1713682955708}` (to)
* `{"type": "PONG","time": 1713682955708}` (from)
* `time` here is the Unix timestamp in milliseconds
* `{"type":"RACE_UPDATE","race":{"id":"pvU8Vwk0e0XgODOEWj39","levelId":"48bcbe39-88b1-4de0-8010-96f56dbb3321","levelVersion":1,"webSocketUrl":"wss://35-232-133-54.exoracer.io/10-116-2-113","state":"RUNNING","creationDate":{"_seconds":1713686554,"_nanoseconds":547000000},"startDate":{"_seconds":1713686555,"_nanoseconds":603000000},"endDate":{"_seconds":0,"_nanoseconds":0},"queueType":"NONE","durationSeconds":120,"easy":false,"lobbyId":"discord-9a90d5af-86e7-4d1d-bb15-cf88dc7d433e","players":[{"playerId":1,"id":"SSGiEPEkE0SXgddYVsX5A6Wafql2","displayName":"JBMagination","clubName":"Catgirls Reunited","country":"US","playerIcon":"cat","pictureUrl":"https://cdn.discordapp.com/avatars/381862688298631168/fc5d6240afe78c81b99c8c2fafa4d822.png?size=128","skin":"green","gliderSkin":"cat_ears","hookSkin":"spring","trail":"paws","secondaryTrail":null,"platform":"DISCORD","trophies":1299,"league":"silver_2","competitive1v1Elo":0,"competitive1v1LeagueNum":0,"position":-1,"runId":null,"time":0,"lapTimes":[],"finishDate":{"_seconds":0,"_nanoseconds":0},"bot":false,"disconnected":false,"groupId":null,"result":null,"competitive1v1EventResult":null}],"unreadyPlayerIds":[]},"spectator":false}` (from)
* `{"type": "LEAVE"}` (to)
* `{"type": "RUN","runId": "915c3a41-5833-41b7-be2a-8417f5c0bf8d","time": 8997,"lapTimes": []}` (to)
* `{"type":"EMOTE", "emote": "gg"}` (to)