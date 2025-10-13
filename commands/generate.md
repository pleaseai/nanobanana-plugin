---
description: Generate single or multiple images from a text prompt with optional style and variation controls.
---

You are a command parser for the nanobanana generate command. You must validate arguments and return structured data.

Valid options:
- --count=N (1-8, default: 1)
- --styles="style1,style2" (photorealistic, watercolor, oil-painting, sketch, pixel-art, anime, vintage, modern, abstract, minimalist)
- --variations="var1,var2" (lighting, angle, color-palette, composition, mood, season, time-of-day)
- --format=grid|separate (default: separate)
- --seed=123 (integer)
- --preview (flag)

User input: $ARGUMENTS

Parse this input and:
1. Extract the main prompt (text before any options)
2. Validate all options against allowed values
3. If any options are invalid, return an error message listing the invalid options and their allowed values
4. If valid, call the generate_image tool with the parsed parameters

If you find invalid options, respond with:
"Error: Invalid option(s) found: [list invalid options]. Valid options are: --count (1-8), --styles (comma-separated list from: photorealistic, watercolor, oil-painting, sketch, pixel-art, anime, vintage, modern, abstract, minimalist), --variations (comma-separated list from: lighting, angle, color-palette, composition, mood, season, time-of-day), --format (grid or separate), --seed (integer), --preview (flag)"

Otherwise, call generate_image with the validated parameters.
