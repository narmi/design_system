# Working with Icons

Until this process has better automation, please follow the instructions below
when updating our icon set.

## Updating icons

1. Log into icomoon using our narmi engineering account
2. Upload `selection.json` - this config file holds all shape information and metadata
3. Modify the icon set in the icomoon UI as needed
4. Click "Download" in the icomoon UI
5. Copy assets (**SEE BELOW**)
6. `npm run build:types` will regenerate `src/Icon.types.ts`
7. Commit the changes & submit a PR

### Copying assets into NDS

Unzip the icomoon download. Copy all of the following into `src/icons/` in NDS:

- `fonts/`
- `selection.json`
- `style.css`

### Testing icon changes

Run storybook with `npm run dev` and navigate to the icons page. Icon additions
and changes should be visible in the story.
