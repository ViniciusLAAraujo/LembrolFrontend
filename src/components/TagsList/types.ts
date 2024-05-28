import { Tag } from "../../modules/tag/types"

export type TagsListProps = {
    tags : Tag[]
    handleTagClick : (tag:Tag) => void
}