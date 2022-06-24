# Working with Icons

Until this process has better automation, please follow the instructions below
when updating our icon set.

## Updating icons

1. Log into icomoon using our narmi engineering account
2. Upload `selection.json` - this config file holds all shape information and metadata
3. Modify the icon set in the icomoon UI as needed
4. Click "Download" in the icomoon UI
5. Copy assets (**SEE BELOW**)
6. Commit the changes to NDS

### Copying assets into NDS

Uncompress the zip file from icomoon and move files into NDS. The destination
and file names will not match the icomoon assets exactly - use the table below:

| Icomoon download       | NDS destination            |
| ---------------------- | -------------------------- | ----------------------- |
| `selection.json`       | `src/icons/selection.json` |
| `style.css`            | `src/icons/icons.css`      |
| `fonts/icomooon.woff`  | `src/icons/icomoon.woff`   |
| `fonts/icomooon.woff2` | `src/icons/icomoon.woff2`  |
| k                      | `fonts/icomooon.svg`       | `src/icons/icomoon.svg` |
| `fonts/icomooon.ttf`   | `src/icons/icomoon.ttf`    |

#### You MUST modify the CSS file after copying

To acommodate NextJS consumers, we inline font assets. To reduce file size,
modify the icons CSS to serve only the `woff` format from a relative path:

```diff
@font-face {
  font-family: "icomoon";
- src: url("fonts/icomoon.woff2?43hwv3") format("woff2"),
-    url("fonts/icomoon.ttf?43hwv3") format("truetype"),
-    url("fonts/icomoon.woff?43hwv3") format("woff"),
-    url("fonts/icomoon.svg?43hwv3#icomoon") format("svg");
+ src: url("./icomoon.woff?43hwv3") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```
