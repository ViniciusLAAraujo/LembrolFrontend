import { Tag } from "../../pages/Gps/types"

export type TagsListProps = {
    tags : Tag[]
    handleTagClick : (tag:Tag) => void
}