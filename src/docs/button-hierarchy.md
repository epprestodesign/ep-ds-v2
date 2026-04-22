# Button Hierarchy & Action Rules

**EP Design System — Operational Rulebook**
Version 1.0 · Poppins 600 · Primary `#2862FF` · Error `#DC3545`

---

## Overview

This document defines the button hierarchy, action prioritization logic, and toolbar composition rules for the EP Design System. It is derived from production UI patterns across the Events, Compliance, and Event Detail screens.

The system is **logic-first**: every button placement decision should follow the decision tree below before visual styling is considered.

---

## Button Tier Reference

| Tier | Variant | Visual Style | Case | Default Size |
|---|---|---|---|---|
| 1 — Primary | `contained` | Blue fill `#2862FF`, white text | ALL CAPS | `large` |
| 2 — Secondary | `outlined` | White bg, border, dark text | ALL CAPS | `medium` |
| 3 — Overflow | `outlined` + chevron icon | White bg, border, dark text | ALL CAPS | `medium` |
| 4 — Filter/Utility | `outlined` + filter icon | Blue text `#2862FF`, blue icon | ALL CAPS | `medium` |
| 5 — Text/Ghost | `text` | No bg, no border, dark text | Sentence case | `medium` |
| — Status Pill | `Chip` (not Button) | Colored, rounded | Sentence case | — |

### Typography
- **Font**: Poppins 600 (semibold) on all button variants
- **textTransform**: `uppercase` enforced via CSS on `contained` + `outlined`; `none` on `text`
- Do not override per-instance — the theme enforces this system-wide

---

## Toolbar Action Escalation Rules

The number of actions determines toolbar composition:

```
1 action   →  Primary only
2 actions  →  Primary + 1 Secondary
3 actions  →  Primary + 2 Secondary
4+ actions →  Primary + 1–2 Secondary + MORE ACTIONS dropdown
```

**Placement order (left → right):**
```
[ MORE ACTIONS ▾ ]  [ SECONDARY ]  [ PRIMARY ]
```

Primary is always the rightmost action. MORE ACTIONS is always the leftmost when present.

---

## Tier 1 — Primary Button

**Rule**: One primary button per toolbar or page header section. No exceptions.

```tsx
<Button variant="contained" color="primary" size="large">
  Create New Event
</Button>
```

- Renders as: **CREATE NEW EVENT**
- Color: `primary.main` → `#2862FF`
- Size: `large` by default
- Icons: optional, left-aligned (`startIcon`)
- Position: always rightmost in the action group

**Examples from product:**
- `CREATE NEW EVENT` (Events list)
- `UPLOAD REGISTRATION DATA` (Compliance)
- `EDIT DETAILS` (Event detail, view mode)
- `SAVE` (Edit mode, unsaved changes bar)

---

## Tier 2 — Secondary Button

**Rule**: Max 2 secondary buttons visible before overflow to MORE ACTIONS.

```tsx
<Button variant="outlined" size="medium">
  Export
</Button>
```

- Renders as: **EXPORT**
- Style: white background, `#D5D7DF` border, `text.primary` color
- No `color` prop (inherits default outlined style)
- Position: left of Primary, right of MORE ACTIONS

**Examples from product:**
- `EXPORT`
- `IMPORT`
- `DISCARD` (in unsaved changes bar — neutral, not destructive)

---

## Tier 3 — MORE ACTIONS Overflow

**Rule**: When total actions exceed 3, overflow lower-priority actions into a dropdown.

```tsx
<Button variant="outlined" endIcon={<Icon>keyboard_arrow_down</Icon>} size="medium">
  More Actions
</Button>
```

- Renders as: **MORE ACTIONS ▾**
- Contains: 3–10 overflow actions in a Menu
- Position: leftmost in the action group
- Contents: archive, duplicate, clone, bulk operations, low-priority destructive actions

**Overflow decision criteria:**
- Would this action be used less than 20% of the time? → Overflow
- Is this action only relevant in specific edge cases? → Overflow
- Is there already a primary + 2 secondary visible? → Overflow the next one
- Is this action critical to the daily workflow? → Keep visible as secondary

---

## Tier 4 — Filter / Utility Actions

**Rule**: Filter controls live in their own filter bar row, below the main toolbar. Never in the primary action group.

```tsx
<Button
  variant="outlined"
  color="primary"
  startIcon={<Icon>filter_list</Icon>}
  size="medium"
>
  Filters
</Button>
```

- Renders as: **⚑ FILTERS**
- Color: `color="primary"` → blue text `#2862FF` + blue icon
- Style: outlined with primary color (distinguishes from secondary outlined)
- Filter chips appear inline to the right of the FILTERS button
- Resets and active filter counts can appear on the button itself

---

## Tier 5 — Text / Ghost Actions

**Rule**: Used for low-priority inline additions and tertiary actions. Sentence case only.

```tsx
<Button variant="text" color="primary" size="medium">
  + Add a Registration System Event ID
</Button>
```

- Renders as: **+ Add a Registration System Event ID**
- No `textTransform: uppercase` (system-enforced `none` for text variant)
- Color: `color="primary"` for additive actions, default for neutral
- Use for: inline row additions, "+ Add another", "Favorite"
- Never use text buttons in a toolbar action group

---

## Destructive Actions

**Rule**: Destructive actions must be visually separated and use error semantics.

```tsx
<Button variant="outlined" color="error" size="medium">
  Delete
</Button>
```

- Color: `color="error"` → `#DC3545`
- Placement: inside MORE ACTIONS dropdown when possible
- If exposed as a standalone button: always separated from positive CTAs with spacing or a Divider
- Row-level destructive: icon-only red trash IconButton (see Row Actions doc — separate)
- Never place a destructive button adjacent to a primary CTA without clear visual separation

---

## Status Pills

**Rule**: Status pills are `Chip` components, not buttons. They represent state — never use as CTA triggers.

```tsx
<Chip label="Active" color="success" size="small" />
<Chip label="Closed" size="small" />
<Chip label="Pending" color="warning" size="small" />
```

| Status | Color token | Hex |
|---|---|---|
| Active | `success` | `#198754` |
| Pending | `warning` | `#FFC107` |
| Closed / Inactive | default gray | — |
| Error / Rejected | `error` | `#DC3545` |

---

## Unsaved Changes Bar (UnsavedChangesBar)

**Named pattern** — mockup pending from product team.

- **Trigger**: any unsaved form state change detected
- **Placement**: floating, horizontally centered above main content, dark background overlay bar
- **Actions**:
  - `DISCARD` — `variant="outlined"`, neutral secondary (not destructive red)
  - `SAVE` — `variant="contained" color="primary"`
- **Semantics**: DISCARD is neutral cancel (reversible — user can re-enter edit mode). It is not a destructive action.
- **Note**: When the bar is visible, the page header may still show EDIT DETAILS or standard toolbar actions behind it

---

## Decision Tree

Use this before placing any button on a screen:

```
Is this the single highest-priority action in this section?
├── YES → Tier 1: Primary (contained blue)
│          └── Is there already a primary in this toolbar?
│               └── YES → Reconsider — only one primary allowed
└── NO  →
    Is it a supporting operational action (export, import, download)?
    ├── YES → Tier 2: Secondary (outlined)
    │          └── Are there already 2 secondaries visible?
    │               └── YES → Tier 3: Overflow to MORE ACTIONS
    └── NO  →
        Is it a filter or search utility control?
        ├── YES → Tier 4: Filter bar (outlined, color="primary")
        └── NO  →
            Is the action destructive / irreversible?
            ├── YES → Destructive (outlined color="error", or in MORE ACTIONS)
            └── NO  →
                Is it low-priority or inline (add row, tertiary link)?
                ├── YES → Tier 5: Text button (sentence case)
                └── NO  →
                    Is it a state indicator, not an action?
                    └── YES → Status Pill (Chip, not Button)
```

---

## Toolbar Composition Examples

### Simple list page (1 primary + 1 secondary)
```
[ EXPORT ]  [ + CREATE NEW EVENT ]
```

### Detail page view mode (1 primary + 2 secondary)
```
[ IMPORT ]  [ EXPORT ]  [ EDIT DETAILS ]
```

### Detail page with overflow (1 primary + 1 secondary + overflow)
```
[ MORE ACTIONS ▾ ]  [ EXPORT ]  [ EDIT DETAILS ]
```

### Edit mode save bar
```
          [ Unsaved changes   DISCARD   SAVE ]   ← floating bar
```

### Filter bar (separate row)
```
[ ⚑ FILTERS ]  [ From: Mon, 04/14/2025 × ]  [ Status: Active × ]
```

---

## Anti-Patterns

| ❌ Don't | ✅ Do instead |
|---|---|
| Two primary buttons in one toolbar | Keep one primary; demote the other to secondary |
| Outlined button with `color="primary"` in the action group | Reserve primary-color outlined for FILTERS only |
| Destructive button next to primary CTA | Separate with spacing, or move inside MORE ACTIONS |
| Status chip used as a dropdown trigger | Use a separate Button with a Menu |
| Text button in a toolbar action group | Text buttons are inline-only (forms, lists) |
| ALL CAPS on a text variant button | Text variant is always sentence case |
| More than 3 visible actions in a toolbar | Overflow extras into MORE ACTIONS |
