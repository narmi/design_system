# Working with Icons

Until this process has better automation, please follow the instructions below
when updating our icon set.

## Updating icons

1. Log into icomoon using our narmi engineering account
2. Upload `selection.json` - this config file holds all shape information and metadata
3. Modify the icon set in the icomoon UI as needed
4. Click "Generate font" from the project view in the icomoon UI, then click "Download"
5. Copy assets (**SEE BELOW**)
6. `npm run build:types` will regenerate `src/Icon.types.ts`
7. Commit the changes & submit a PR

### Copying assets into NDS

Unzip the icomoon download. Copy all of the following into `src/icons/` in NDS:

- `fonts/`
- `selection.json`
- `style.css`

NOTE: style.css may include multiple urls as the src for @font-face. Please remove all except the woff url.

### Testing icon changes

Run storybook with `npm run dev` and navigate to the icons page. Icon additions
and changes should be visible in the story.
