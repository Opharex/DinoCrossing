# DinoCrossing Gameplay Ideas Backlog 🦖

**Created:** 2026-10-27  
**Purpose:** A permanent, version-controlled collection of potential gameplay-loop ideas. This document does **not** change the game.  
**Status key:** **NEXT** = selected for design/implementation planning; **BACKLOG** = saved for possible future updates; **IN PROGRESS** = actively being built; **DONE** = shipped and tested.

## Selected next: three connected gameplay systems

### 1. Hatchling Rescue · NEXT
Rare nests appear on optional but reachable paths. The player collects an egg, a baby dinosaur hatches, and the hatchling follows the player's recent footsteps for a short escort. Deliver it to a safe release area after several rows for Amber and a fossil fragment. Protect current river, lava, log, and platform support systems: hatchlings must attach to the same moving-platform support when necessary, not create an extra player collision or expensive pathfinding. If the player dies or the hatchling is lost, that escort fails; prior unlocks remain saved.

### 2. Fossil Collection · IN PROGRESS

**Implemented 2026-10-27 (pending Android visual/performance validation):** collect one rare Skull, Ribs, and Legs fossil per base species, only during runs using that species; chance climbs gradually with score. All three pieces unlock eligibility to buy its Skeleton variant for 500 Amber. The shop shows hover/touch requirements. Existing 27 skin IDs and old saves remain intact; new IDs 27–35 are Skeleton variants.
Collect rare fossil fragments from carefully placed pickups and successful rescues. A persistent museum/journal tracks skeleton pieces for the nine base species. Completing a skeleton unlocks a cosmetic reward, achievement, or thematic shop decoration; no compulsory stat advantage or changes to existing skin IDs. Allow duplicate fragments to become a small amount of ordinary Amber or another bounded currency exchange later, if desired.

### 3. Amber Combo Multiplier · NEXT
Consecutive Amber pickups during a run build a streak that grants a modest bonus on subsequent pickups. Show the current combo unobtrusively on the HUD. Reset after a configurable period without Amber or on death, not just because a risky sequence has a long animation. Rescue routes, fossil detours, and Amber caches create meaningful decisions between safety, collecting, and maintaining a streak. Cap the bonus to protect the shop economy.

### Connected loop (proposal)
Start a run → collect Amber to build a combo → discover an optional fossil or hatchling nest → take the risk of detouring/escorting → reach a release clearing → receive Amber plus a fossil fragment → eventually complete museum skeletons → unlock cosmetics and set a new collection goal. Players can ignore optional goals and continue playing standard DinoCrossing.

### Suggested implementation order
1. **Fossil collection data + museum UI**: add optional save fields with defaults. Create one lightweight fossil pickup and a simple collection display. Validate existing saves.
2. **Amber combo system**: extend the existing Amber pickup handler, with a clearly capped multiplier, HUD text, and resetting of run-only state. Verify the score and death/Retry paths.
3. **Hatchling rescue**: add nest generation with safe placement and row-generation spacing, a low-poly baby model, a small bounded follow-history (no pathfinding), a rescue completion destination, and new reward events.
4. **Integration and balance pass**: connect rescues to the museum and combo loop, avoid generating impossible rescues through triple water/lava sections, check pacing, shop economy, and replayability.
5. **Android regression tests**: ensure no worsening of FPS, no duplicate listeners or maps on Retry/Shop, safe cleanup on row culling, and no damage to current waterfalls or moving-platform physics.

### Non-negotiable compatibility constraints
- Keep the existing `dino-crossing-v2` save key and all current fields: best, bank, unlocked, chosen, audio, quality, controls, lighting and tile grid. Add optional backward-compatible keys only.
- Keep all existing 27 dinosaur/skin IDs, costs, ownership, and equipped selection unchanged.
- Keep the one-column species-first shop, startup loading screen, and preloaded thumbnails.
- Keep existing movement, hazards, amber collection, waterfalls, log/lava physics, and saved progress.
- Keep the three new systems modular: separate per-run state from persistent collection data; cancel scheduled events across run changes.
- Keep performance suitable for Android: cap active hatchlings at one, cap spawn frequency and particles, reuse low-poly assets, and avoid full-scene per-frame scans.

---

## All 20 ideas saved for later

### Gameplay mechanics and risk / reward
- **[NEXT] 01. Hatchling Rescue:** Rescue baby dinosaurs from rare nests, escort them across dangerous rows, and earn Amber/fossil rewards.
- **[BACKLOG] 02. Amber Caches:** High-value breakable Amber caches placed on dangerous routes. Breaking them takes multiple hits.
- **[BACKLOG] 03. Stalking Predators:** Large carnivores track the player across multiple rows, creating an extended pursuit and escape challenge.
- **[BACKLOG] 04. Risky Alternate Routes:** Choose safer low-reward paths or more hazardous, higher-reward paths affecting a stretch of rows.

### New hazards, world interactions, and collectibles
- **[IN PROGRESS] 05. Fossil Collection:** Find rare bones, complete species skeletons in a museum, and unlock cosmetic rewards.
- **[NEXT] 06. Amber Combo Multiplier:** Collect consecutive Amber without breaking the streak to improve rewards.
- **[BACKLOG] 07. Temporary Power-ups:** Time-limited shield, Amber magnet, and slow-motion pickups.
- **[BACKLOG] 08. Dynamic Weather:** Rain, fog, and storms that alter river speeds, visibility, and hazard frequency.
- **[BACKLOG] 09. Whirlpools and Lava Vortices:** Currents that influence the lateral movement of logs and platforms.
- **[BACKLOG] 10. Ancient Ruins:** Occasional stone ruins with collapsing bridges, moving pillars, and treasure chambers.
- **[BACKLOG] 11. Dinosaur Abilities:** Small, balanced abilities per species while Original/Tech/Chrome remain cosmetic variants.
- **[BACKLOG] 12. Moving Herd Crossings:** Split or diagonal herds that create shifting safe openings.
- **[BACKLOG] 13. Dangerous Amber Rush:** Valuable Amber trails that tempt the player toward timed hazards.
- **[BACKLOG] 14. Giant Dinosaur Encounters:** Large dinosaurs moving through the environment, creating occasional footprint obstacles.

### Long-term progression and replayability
- **[BACKLOG] 15. Daily Challenges:** Shared daily seed with rotating objectives and optional rewards.
- **[BACKLOG] 16. Dinosaur Mastery:** Per-species XP unlocking roars, animations, footprints, and visual cosmetics.
- **[BACKLOG] 17. Expeditions:** Choose a pre-run mission, such as hatchling rescues, fossils, or volcanic crossings.
- **[BACKLOG] 18. Relic System:** Equip a pre-run relic that changes risk/reward tradeoffs.
- **[BACKLOG] 19. Biome Discoveries:** Record discovered terrain, creatures, and hazards in a persistent journal.
- **[BACKLOG] 20. Milestone Events:** Special challenges every 50–100 rows, such as volcanic or waterfall gauntlets.

## Updating this backlog
When an idea enters implementation, change its label from **BACKLOG/NEXT** to **IN PROGRESS**. Mark it **DONE** only after a game update is committed and tested. Record new ideas below without discarding old ones. Always update the main-menu splash text on actual game-code changes and report the exact text and commit in the response.
