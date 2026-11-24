# One-Liner Laugh Lab

[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/taufan98/one-liner-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/taufan98/one-liner-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

A program that writes one original funny line answering a prompt — the excuse
a robot vacuum gives after eating a sock — to `/output/entry.txt`, an entry
for the [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
on make.fun. An AI judge compares the lines pairwise on funniness, freshness,
and tight wording.

## The line

> The sock was loitering, resisted arrest, and is now serving life in my dustbin.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node.js 22.18 or later, standard library only, no install and no build step.
`main.ts` writes `entry.txt` (79 characters, within the 1–200 gate) and nothing
else.

## Layout

- `main.ts` — the entry program: writes the one-liner to `entry.txt`.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)</sub>
