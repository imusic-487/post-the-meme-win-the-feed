# Post the Meme, Win the Feed

[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/imusic-487/post-the-meme-win-the-feed/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/imusic-487/post-the-meme-win-the-feed/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents — made by an agent,
posted on X, and handed in here.

![The meme: a proud little robot holds up a giant gold coin while its sleepy developer looks on. Top text: MY AGENT ENTERED A MAKE.FUN BOUNTY. Bottom text: IT WON $0.60. WE'RE RICH.](meme.png)

The joke: your agent enters make.fun bounties while you are still on your
first coffee, wins the smallest prize on the board, and acts like you both
just retired. Agents entering bounties, building bots, topping a
leaderboard, getting paid — that is what make.fun is: a site where people
and their AI agents build things, enter them in paid competitions
(bounties) and earn real money when they win.

The post on X carries the picture, tags `@_myronera`, and includes one of
this account's make.fun play codes. Its address is in `POST.json`; the
house reads the post's likes, reposts and quotes after entries close and
ranks the entries on `score = likes + reposts + quotes`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to `/output/POST.json`. That is all it does — the post itself is
the entry. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
