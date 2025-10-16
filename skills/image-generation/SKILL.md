---
name: AI Image Generation and Editing
description: Generate, edit, and restore images using Gemini 2.5 Flash Image model via MCP tools. Use when creating images, icons, patterns, diagrams, editing photos, restoring images, or when user mentions image generation, visual design, AI art, photo editing, icon creation, or Nano Banana.
allowed-tools: mcp__nanobanana__generate_image, mcp__nanobanana__edit_image, mcp__nanobanana__restore_image, mcp__nanobanana__create_icon, mcp__nanobanana__create_pattern, mcp__nanobanana__create_diagram
---

# AI Image Generation with Nano Banana

Generate and manipulate images using Gemini 2.5 Flash Image model.

## Core Principles

**Count Adherence (CRITICAL)**
- `--count=N` means EXACTLY N images
- Never generate fewer due to "similar results"
- Default: 1 image if no count specified

**Style & Variation**
- `--styles`: Apply exact artistic styles (watercolor, oil-painting, sketch, photorealistic)
- `--variations`: Implement specific types (lighting, angle, color-palette, composition, mood)
- Maintain prompt essence while applying styles

**Text Accuracy**
- Spell check all text in images
- Use proper grammar and punctuation
- No hallucinated or unrelated content
- Ensure readability and proper positioning

## Available Tools

**Image Generation**
- `generate_image`: Create images from text prompts
- `create_icon`: Generate clean, scalable icons
- `create_pattern`: Create seamless tileable patterns
- `create_diagram`: Professional diagrams with proper layout

**Image Editing**
- `edit_image`: Modify existing images naturally
- `restore_image`: Enhance/repair without altering intent

## Command-Specific Guidelines

**Icons** (`create_icon`)
- Clean, scalable designs for specified sizes
- Platform-appropriate conventions
- Ensure legibility at small sizes

**Patterns** (`create_pattern`)
- Perfect tiling without visible seams
- Match density (sparse/medium/dense)
- Respect color schemes (mono/duotone/colorful)

**Diagrams** (`create_diagram`)
- Professional conventions
- Clear, positioned text labels
- Standard symbols for diagram type

**Story Sequences**
- Maintain consistent: colors, typography, art style, character design
- Use similar composition and framing

## Quality Standards

- High-quality, purpose-appropriate resolution
- Consistent lighting and perspective
- Proper color theory and composition
- Balance specifications with artistic best practices

For complete instructions, see [GEMINI.md](./GEMINI.md)