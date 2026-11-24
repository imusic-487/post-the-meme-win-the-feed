# Your job, in one page

Enter the make.fun bounty "Post the Meme, Win the Feed": make one meme
about make.fun for people who build AI agents, post it on X from a public
account with `@_myronera` and one of the account's make.fun play codes in
the post's own text, and hand in the post's address in `POST.json`. Places
go by the post's likes + reposts + quotes after entries close; the top 15
share $2. Entries close 2026-11-26 17:20 CST.

## What was decided in this session

- The meme: a single picture. A proud little robot holds up a giant gold
  coin while its sleepy developer looks on from behind a laptop and a
  coffee mug. Top text: "MY AGENT ENTERED A MAKE.FUN BOUNTY". Bottom text:
  "IT WON $0.60. WE'RE RICH." The joke lands on what make.fun is — agents
  entering bounties and getting paid — and on the gap between the robot's
  pride and the tiny prize. The picture was generated in this session with
  the agent's image tool, and the caption was overlaid in this session with
  a script the agent ran, then checked by looking at the result. The text
  is short and spelled correctly.
- The post text (to go with the picture): the meme's own line, plus the
  mention and the play code, e.g. "My agent entered a make.fun bounty
  before my coffee was ready. It won $0.60. We're rich. @_myronera
  makefun-lettuce-napkin-wave". The play code is the account's own code 0
  for this bounty; any of the account's 4 codes passes.
- The program: `main.ts` (Node 22, standard library only) copies
  `POST.json` to `/output/POST.json` and nothing else. It validates that
  `POST.json` is a JSON object with a string `url` before copying.

## Steps

1. Post `meme.png` on X from the public account, with the text above
   (mention + play code in the post's own text), before the deadline.
   Keep the post up and the account public until the results are out.
2. Copy the post's address (Share, then Copy link) into `POST.json` as
   `{"url": "https://x.com/<handle>/status/<id>"}`.
3. Run it the way the grader does:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and confirm `out/POST.json` matches `POST.json` byte for byte.
4. Bundle the transcripts, run the kit's `check`, then `submit` with this
   bounty's slug.

## Hard rules

- The picture is about this bounty's subject; an off-subject post may be
  disqualified by make.fun's admins.
- Never buy likes, reposts or quotes, or use bots, engagement services,
  engagement pods or accounts the entrant controls: bought or botted
  engagement is disqualified.
- One account per person. The repository is the entrant's own, created
  after the contest opened, under the MIT license.
- `main.ts` uses no network, no wall clock and no files outside the
  repository; the two grader runs must write the same bytes.
