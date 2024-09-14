import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
	    title: "Navigate this site",
		folderClickBehavior: "link", 
		filterFn: (node) => {
			// exclude files with a frontmatter key named "excludeFromExplorer"
			if (node.file?.frontmatter?.excludeFromExplorer || node.name === "Media" || node.name === "Ontario-Curriculum" || node.name === "College-Board-Curriculum") {
				return false
			} else {
				return true
			}
		} 
	})),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
	    title: "Navigate this site",
		folderClickBehavior: "link", 
		filterFn: (node) => {
			// exclude files with a frontmatter key named "excludeFromExplorer"
			if (node.file?.frontmatter?.excludeFromExplorer || node.name === "Media" || node.name === "Ontario-Curriculum" || node.name === "College-Board-Curriculum") {
				return false
			} else {
				return true
			}
		} 
	})),
  ],
  right: [],
}
